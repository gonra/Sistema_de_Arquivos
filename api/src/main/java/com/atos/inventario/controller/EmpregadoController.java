package com.atos.inventario.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.atos.inventario.atosdto.EmpregadoRequestDTO;
import com.atos.inventario.atosdto.EmpregadoResponseDTO;
import com.atos.inventario.atosdto.FiltroPesquisaEmpregadoDTO;
import com.atos.inventario.atosdto.FinanceiraDTO;
import com.atos.inventario.atosdto.LoginRequestDTO;
import com.atos.inventario.atosdto.LoginResponseDTO;
import com.atos.inventario.enums.DepartamentoEmpregadoEnum;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.atos.inventario.model.Empregado;
import com.atos.inventario.model.Financeira;
import com.atos.inventario.repositories.EmpregadoRepository;
import com.atos.inventario.repositories.RoleEmpregadoRepository;
import com.atos.inventario.security.JwtUtils;
import com.atos.inventario.services.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class EmpregadoController {

	public static final String AUTHORIZATION_HEADER = "Authorization";
	
	@Autowired
	AuthenticationManager authenticationManager;
	
	@Autowired
	JwtUtils jwtUtils;
	
	@Autowired
	private EmpregadoRepository empregadoRepository;
	
	@Autowired
	private RoleEmpregadoRepository roleEmpregadoRepository;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private PasswordEncoder passEncoder;

	@GetMapping(value = "/empregado" )
	public ResponseEntity<Empregado> buscarEmpregado(@RequestParam String matricula, @RequestParam String senha) {
		String senhaCriptografada = passEncoder.encode(senha);
		Optional<Empregado> empregado = empregadoRepository.findByMatriculaSenha(matricula, senhaCriptografada);
		if (empregado.isPresent()) {
			return ResponseEntity.ok(empregado.get());
		} else {
			return ResponseEntity.notFound().build();
		}
	
	}

	@PostMapping(value = "/empregado/listar")
	public ResponseEntity<List<EmpregadoResponseDTO>> listarEmpregados(@RequestBody(required = false) FiltroPesquisaEmpregadoDTO filtro){

		List<Empregado> empregados = new ArrayList<>();
		if (filtro == null) {
			empregados = empregadoRepository.findAll();
		} else {
		    empregados = empregadoRepository.findByAtivoTrue().stream()
				.filter( filtro.getNome() != null ? e -> e.getNome().toLowerCase().contains(filtro.getNome().toLowerCase()) : e -> true )
				.filter( filtro.getMatricula() != null ? e -> e.getMatricula().toLowerCase().contains(filtro.getMatricula().toLowerCase()) : e -> true)
				.filter( filtro.getEmail() != null ? e -> e.getEmail().toLowerCase().contains(filtro.getEmail().toLowerCase()) : e -> true )
				.filter( filtro.getDepartamentoId() != null ? e -> e.getDepartamentoId() == filtro.getDepartamentoId() : e -> true )
				.collect(Collectors.toList());
		}
		
		if (empregados.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		List<EmpregadoResponseDTO> listEmpregados = empregados.stream()
				  .map(x -> new EmpregadoResponseDTO(x))
				  .collect(Collectors.toList());
		
		return ResponseEntity.ok(listEmpregados);
	}

	@PostMapping("/empregado/cadastrar")
	public ResponseEntity<EmpregadoResponseDTO> cadastrarEmpregado(@RequestBody EmpregadoRequestDTO dto){

		Empregado empregado = new Empregado();
		empregado.setMatricula(dto.getMatricula());
		empregado.setNome(dto.getNome());
		empregado.setEmail(dto.getEmail());
		empregado.setAtivo(dto.getAtivo());
		
		empregado.setDepartamento(DepartamentoEmpregadoEnum.getByCodigo(dto.getDepartamentoId()));
		
		empregado.getRoles().add(roleEmpregadoRepository.getById(2L)); // USER
		
		String senha1 = dto.getSenha();
	    String senhaCriptografada = passEncoder.encode(senha1);
	    empregado.setSenha(senhaCriptografada);
		Empregado e2 = empregadoRepository.save(empregado);
		
		if (e2 == null) { 
			return ResponseEntity.badRequest().build();
		}
		return ResponseEntity.ok(new EmpregadoResponseDTO(e2));
	}


	@PostMapping(value = "/empregado/{id}/ativar")
	public ResponseEntity<Void> ativaEmpregado(@RequestParam("id") Long id){

		Optional<Empregado> empregado = empregadoRepository.findById(id);
		if (empregado.isPresent()){
			empregado.get().setAtivo(true);
			empregadoRepository.save(empregado.get());
		} else {
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.noContent().build();
	}

	
	@PostMapping(value = "/empregado/{id}/desativar")
	public ResponseEntity<Void> desativaEmpregado(@RequestParam("id") Long id){

		Optional<Empregado> empregado = empregadoRepository.findById(id);
		if (empregado.isPresent()){
			empregado.get().setAtivo(false);
			empregadoRepository.save(empregado.get());
		} else {
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.noContent().build();
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@RequestBody LoginRequestDTO loginRequest) {
		UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(loginRequest.getMatricula(), loginRequest.getSenha(),new ArrayList<>());
		Authentication authentication = authenticationManager.authenticate(authenticationToken);
		
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
	    HttpHeaders httpHeaders = new HttpHeaders();
	    httpHeaders.add(AUTHORIZATION_HEADER, "Bearer " + jwt);
	      
		return new ResponseEntity<>(new LoginResponseDTO(jwt), httpHeaders, HttpStatus.OK);
	}

	@GetMapping("/user")
	public ResponseEntity<EmpregadoResponseDTO> getActualUser() {
		Optional<Empregado> empregado = userService.getUserWithAuthorities();
		if (empregado.isPresent()) {
			EmpregadoResponseDTO dto = new EmpregadoResponseDTO(empregado.get());
			return ResponseEntity.ok(dto);
		} else { 
			return ResponseEntity.notFound().build();
		}
	}
	
	@GetMapping(value = "/empregado/{id}" )
	public ResponseEntity<EmpregadoResponseDTO> getUserById(@PathVariable("id") Long id ) {
		Optional<Empregado> empregado = empregadoRepository.findById(id);
		if (empregado.isPresent()) {
			EmpregadoResponseDTO dto = new EmpregadoResponseDTO(empregado.get());
			return ResponseEntity.ok(dto);
		} else {
			return ResponseEntity.notFound().build();
		}
	}
	
	@DeleteMapping(value = "/empregado/delete/{id}" )
	public void deleteUser(@PathVariable("id") Long id) {
		Optional<Empregado> empregado = empregadoRepository.findById(id);
		if (empregado.isPresent()) {
			//TO DO
			//empregadoRepository.deleteById(id);
		}	
	}
	
	@PutMapping(value = "/empregado/atualizar")
	public ResponseEntity<EmpregadoResponseDTO> atualizarEmpregado(@RequestBody EmpregadoRequestDTO dto){

		Empregado emp = null;
		
		Optional<Empregado> empregado = empregadoRepository.findById(dto.getIdEmpregado());
		if (empregado.isPresent()) {
			emp = empregado.get();
			
			emp.setMatricula(dto.getMatricula());
			emp.setNome(dto.getNome());
			emp.setEmail(dto.getEmail());
			emp.setAtivo(dto.getAtivo());
			
			emp.setDepartamento(DepartamentoEmpregadoEnum.getByCodigo(dto.getDepartamentoId()));
			
			emp = empregadoRepository.save(emp);
			
			if (emp == null) { 
				return ResponseEntity.badRequest().build();
			}
			
		}
		
		return ResponseEntity.ok(new EmpregadoResponseDTO(emp));
	}


}	
