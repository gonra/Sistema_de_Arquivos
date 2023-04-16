package com.atos.inventario.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.atos.inventario.atosdto.ContratoDTO;
import com.atos.inventario.atosdto.FiltroPesquisaDTO;
import com.atos.inventario.model.ClassificacaoDocumental;
import com.atos.inventario.model.Contrato;
import com.atos.inventario.model.Empregado;
import com.atos.inventario.model.Localizacao;
import com.atos.inventario.model.UnidadeProdutora;
import com.atos.inventario.repositories.*;
import com.atos.inventario.services.AtividadeEmpregadoService;
import com.atos.inventario.services.LocalizacaoService;
import com.atos.inventario.services.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ContratoController {

	@Autowired
	ContratoRepository contratoRepository;
	
	@Autowired
	ClassificacaoDocumentalRepository classificacaoDocumentalRepository;
	
	@Autowired
	UnidadeProdutoraRepository unidadeProdutoraRepository;
		
	@Autowired
	EmpregadoRepository empregadoRepository;
	
	@Autowired
	LocalizacaoService localizacaoService;
	
	@Autowired
	AtividadeEmpregadoService atividadeEmpregadoService;
	
    @Autowired
    private UserService userService;
	
	@PostMapping("/contrato/listar")
	public ResponseEntity<List<Contrato>> listarContrato(@RequestBody(required=false) FiltroPesquisaDTO filtro) {
		
		// TODO organizar os filtros
		/* 
		 * Contrato.documentoEncaminhamento 
		 * Contrato.unidadeProdutora
		 * Contrato.classificacaoDocumental
		 * Contrato.dataLimite
		 * Contrato.numeroContrato
		 * Contrato.numeroPec
		 * Contrato.empresaContratada
		 * Contrato.objetoResumido
		 * Contrato.localizacao
		 * Empregado.departamento
		 * 
		 * */

		List<Contrato> contratos = contratoRepository.findAll().stream()
				.filter(filtro.getUnidadeProdutora() != null ? c -> c.getUnidadeProdutora().getIdUnidadeProdutora().equals(filtro.getUnidadeProdutora()) : c -> true)
				.filter(filtro.getClassificacaoDocumental() != null ? c -> c.getClassificacaoDocumental().getCodigoClassificacaoDocumental().equals(filtro.getClassificacaoDocumental())  : c -> true)
				.filter(filtro.getDataLimite() != null ? c -> c.getDataLimite().equals(filtro.getDataLimite()) : c -> true)
				.filter(filtro.getLocalizacao() != null ? c -> c.getLocalizacao().getIdLocalizacao() == Long.parseLong(filtro.getLocalizacao()) : c -> true)
				.collect(Collectors.toList());

		return ResponseEntity.ok(contratos);
	}

	@PostMapping("/contrato/cadastrar")
	public ResponseEntity<Contrato> cadastrarContrato(@RequestBody ContratoDTO documentoDto) {
		ModelMapper mapper = new ModelMapper();
		
		Contrato contrato = mapper.map(documentoDto, Contrato.class);
		
		UnidadeProdutora unidadeProdutora = unidadeProdutoraRepository.findById(documentoDto.getUnidadeProdutoraId()).get();
		contrato.setUnidadeProdutora(unidadeProdutora);
		
		Empregado empregado = empregadoRepository.findById(documentoDto.getEmpregadoId()).get();
		contrato.setEmpregado(empregado);
		
		ClassificacaoDocumental classificacaoDocumental = classificacaoDocumentalRepository.findById(documentoDto.getClassificacaoDocumentalId()).get();
		contrato.setClassificacaoDocumental(classificacaoDocumental);
		
		Localizacao localizacao = localizacaoService.validaLocalizacao(documentoDto.getLocalizacao());
		contrato.setLocalizacao(localizacao);
		
		Contrato retorno = contratoRepository.save(contrato);
		if (retorno != null) {
			atividadeEmpregadoService.registrar(empregado, "DOCUMENTO CONTRATO #"+retorno.getId() + " CADASTRADO");
		}

		return ResponseEntity.ok(retorno);
	}

	@GetMapping(value = "/contrato/{id}")
	public ResponseEntity<Contrato> buscarContrato(@PathVariable long id) {

		Contrato contrato = contratoRepository.findById(id);
		if (contrato != null) {
			return ResponseEntity.ok(contrato);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@DeleteMapping(value = "/contrato/{id}")
	public ResponseEntity<Void> deletarContrato(@PathVariable long id) {

        Optional<Empregado> empregado = userService.getUserWithAuthorities();

		Contrato contrato = contratoRepository.findById(id);
		if (contrato != null) {
			contratoRepository.delete(contrato);
	        if (empregado.isPresent()) {
	        	atividadeEmpregadoService.registrar(empregado.get(), "DOCUMENTO CONTRATO #"+ id + " DELETADO");
	        }
			return ResponseEntity.noContent().build();
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@PutMapping(value = "/contrato/{id}")
	public ResponseEntity<Contrato> editarContrato(@PathVariable long id, @RequestBody ContratoDTO contratoDto) {
		ModelMapper mapper = new ModelMapper();
		Contrato contrato = contratoRepository.findById(id);
	    contrato = mapper.map(contratoDto, Contrato.class);
		Contrato contratoRetorno = contratoRepository.save(contrato);

		return ResponseEntity.ok(contratoRetorno);
	}

}
