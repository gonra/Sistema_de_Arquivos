package com.atos.inventario.controller;


import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.atos.inventario.atosdto.FiltroPesquisaDTO;
import com.atos.inventario.atosdto.PastaFuncionalDTO;
import com.atos.inventario.model.ClassificacaoDocumental;
import com.atos.inventario.model.Empregado;
import com.atos.inventario.model.Localizacao;
import com.atos.inventario.model.PastaFuncional;
import com.atos.inventario.model.UnidadeProdutora;
import com.atos.inventario.repositories.ClassificacaoDocumentalRepository;
import com.atos.inventario.repositories.EmpregadoRepository;
import com.atos.inventario.repositories.PastaFuncionalRepository;
import com.atos.inventario.repositories.UnidadeProdutoraRepository;
import com.atos.inventario.services.AtividadeEmpregadoService;
import com.atos.inventario.services.LocalizacaoService;
import com.atos.inventario.services.UserService;

@RestController
@RequestMapping(path = "/api")
@CrossOrigin
public class PastaFuncionalController {

	@Autowired
    private PastaFuncionalRepository pastaFuncionalRepository;
	
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

    @PostMapping(value = "/pasta/listar")
    public ResponseEntity<List<PastaFuncional>> list(@RequestBody(required=false) FiltroPesquisaDTO filtro) {

		// TODO organizar os filtros
		/* 
		 * PastaFuncional.documentoEncaminhamento 
		 * PastaFuncional.unidadeProdutora
		 * PastaFuncional.classificacaoDocumental
		 * PastaFuncional.dataLimite
 		 * Empregado.nome
 		 * Empregado.matricula
		 * PastaFuncional.localizacao
		 * Empregado.departamento
		 * 
		 * */
		
		List<PastaFuncional> pastasFuncionais = pastaFuncionalRepository.findAll().stream()
				.filter(filtro.getUnidadeProdutora() != null ? p -> p.getUnidadeProdutora().getIdUnidadeProdutora().equals(filtro.getUnidadeProdutora()) : p -> true)
				.filter(filtro.getClassificacaoDocumental() != null ? p -> p.getClassificacaoDocumental().getCodigoClassificacaoDocumental().equals(filtro.getClassificacaoDocumental()) : p -> true)
				.filter(filtro.getDataLimite() != null ? p -> p.getDataLimite().equals(filtro.getDataLimite()) : p -> true)
				.filter(filtro.getLocalizacao() != null ? p -> p.getLocalizacao().getIdLocalizacao() == Long.parseLong(filtro.getLocalizacao()) : p -> true)
				.collect(Collectors.toList());
    	
        return ResponseEntity.ok(pastasFuncionais);
    }
    
    @PostMapping(value="/pasta/cadastrar")
    public ResponseEntity<PastaFuncional> cadastrar(@RequestBody PastaFuncionalDTO pastaFuncionalDto){
    	
		ModelMapper mapper = new ModelMapper();

		PastaFuncional pastaFuncional = mapper.map(pastaFuncionalDto, PastaFuncional.class);

		UnidadeProdutora unidadeProdutora = unidadeProdutoraRepository.findById(pastaFuncionalDto.getUnidadeProdutoraId()).get();
		pastaFuncional.setUnidadeProdutora(unidadeProdutora);
		
		Empregado empregado = empregadoRepository.findById(pastaFuncionalDto.getEmpregadoId()).get();
		pastaFuncional.setEmpregado(empregado);

		ClassificacaoDocumental classificacaoDocumental = classificacaoDocumentalRepository.findById(pastaFuncionalDto.getClassificacaoDocumentalId()).get();
		pastaFuncional.setClassificacaoDocumental(classificacaoDocumental);

		Localizacao localizacao = localizacaoService.validaLocalizacao(pastaFuncionalDto.getLocalizacao());
		pastaFuncional.setLocalizacao(localizacao);
    	
    	PastaFuncional retorno = pastaFuncionalRepository.save(pastaFuncional);
    	
		if (retorno != null) {
			atividadeEmpregadoService.registrar(empregado, "DOCUMENTO PASTA FUNCIONAL #"+retorno.getId() + " CADASTRADO");
		}

    	return ResponseEntity.ok(retorno);
    }
    
    @GetMapping(value= "/pasta/{id}")
    public ResponseEntity<PastaFuncional> getById(@PathVariable long id){
    	PastaFuncional result = pastaFuncionalRepository.findById(id);
    	if (result != null) {
    		return ResponseEntity.ok(result);
    	} else {
    		return ResponseEntity.notFound().build();
    	}
    }

    @DeleteMapping(value="/pasta/{id}")
    public ResponseEntity<Void> delete(@PathVariable long id) {
    	Optional<Empregado> empregado = userService.getUserWithAuthorities();
    	
    	PastaFuncional result = pastaFuncionalRepository.findById(id);
    	if (result != null) {
    		pastaFuncionalRepository.delete(result);
    		if (empregado.isPresent()) {
	        	atividadeEmpregadoService.registrar(empregado.get(), "DOCUMENTO PASTA FUNCIONAL #"+ id + " DELETADO");
	        }
    		return ResponseEntity.noContent().build();
    	} else {
    		return ResponseEntity.notFound().build();
    	}
    }
}
