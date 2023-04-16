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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.atos.inventario.atosdto.FiltroPesquisaDTO;
import com.atos.inventario.atosdto.LicitacaoDTO;
import com.atos.inventario.model.ClassificacaoDocumental;
import com.atos.inventario.model.Empregado;
import com.atos.inventario.model.Licitacao;
import com.atos.inventario.model.Localizacao;
import com.atos.inventario.model.UnidadeProdutora;
import com.atos.inventario.repositories.ClassificacaoDocumentalRepository;
import com.atos.inventario.repositories.EmpregadoRepository;
import com.atos.inventario.repositories.LicitacaoRepository;
import com.atos.inventario.repositories.UnidadeProdutoraRepository;
import com.atos.inventario.services.AtividadeEmpregadoService;
import com.atos.inventario.services.LocalizacaoService;
import com.atos.inventario.services.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class LicitacaoController {

	@Autowired
	LicitacaoRepository licitacaoRepository;
	
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

	@PostMapping("/licitacao/listar")
	public ResponseEntity<List<Licitacao>> listarLicitacao(@RequestBody(required=false) FiltroPesquisaDTO filtro) {

		// TODO organizar os filtros
		/* 
		 * Licitacao.documentoEncaminhamento 
		 * Licitacao.unidadeProdutora
		 * Licitacao.classificacaoDocumental
		 * Licitacao.dataLimite
 		 * Licitacao.numeroProcessoLicitatorio
 		 * Licitacao.numeroPec
		 * Licitacao.objetoResumido
		 * Licitacao.localizacao
		 * Empregado.departamento
		 * 
		 * */
		
		List<Licitacao> licitacoes = licitacaoRepository.findAll().stream()
				.filter(filtro.getUnidadeProdutora() != null ? l -> l.getUnidadeProdutora().getIdUnidadeProdutora().equals(filtro.getUnidadeProdutora()) : l -> true)
				.filter(filtro.getClassificacaoDocumental() != null ? l -> l.getClassificacaoDocumental().getCodigoClassificacaoDocumental().equals(filtro.getClassificacaoDocumental()) : l -> true)
				.filter(filtro.getDataLimite() != null ? l -> l.getDataLimite().equals(filtro.getDataLimite()) : l -> true)
				.filter(filtro.getLocalizacao() != null ? l -> l.getLocalizacao().getIdLocalizacao() == Long.parseLong(filtro.getLocalizacao()) : l -> true)
				.collect(Collectors.toList());

		return ResponseEntity.ok(licitacoes);
	}

	@PostMapping("/licitacao/cadastrar")
	public ResponseEntity<Licitacao> cadastrarLicitacao(@RequestBody LicitacaoDTO documentoDto) {
		
		ModelMapper mapper = new ModelMapper();
		
		Licitacao licitacao = mapper.map(documentoDto, Licitacao.class);
		
		UnidadeProdutora unidadeProdutora = unidadeProdutoraRepository.findById(documentoDto.getUnidadeProdutoraId()).get();
		licitacao.setUnidadeProdutora(unidadeProdutora);
		
		Empregado empregado = empregadoRepository.findById(documentoDto.getEmpregadoId()).get();
		licitacao.setEmpregado(empregado);
		
		ClassificacaoDocumental classificacaoDocumental = classificacaoDocumentalRepository.findById(documentoDto.getClassificacaoDocumentalId()).get();
		licitacao.setClassificacaoDocumental(classificacaoDocumental);
		
		Localizacao localizacao = localizacaoService.validaLocalizacao(documentoDto.getLocalizacao());
		licitacao.setLocalizacao(localizacao);

		Licitacao retorno = licitacaoRepository.save(licitacao);

		if (retorno != null) {
			atividadeEmpregadoService.registrar(empregado, "DOCUMENTO LICITACAO #"+retorno.getId() + " CADASTRADO");
		}
		
		return ResponseEntity.ok(retorno);
	}

	@GetMapping(value = "/licitacao/{id}")
	public ResponseEntity<Licitacao> buscarLicitacao(@PathVariable long id) {

		Licitacao licitacao = licitacaoRepository.findById(id);
		if (licitacao != null) {
			return ResponseEntity.ok(licitacao);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@DeleteMapping(value = "/licitacao/{id}")
	public ResponseEntity<Void> deletarLicitacao(@PathVariable long id) {

		Optional<Empregado> empregado = userService.getUserWithAuthorities();
		
		Licitacao licitacao = licitacaoRepository.findById(id);
		if (licitacao != null) {
			licitacaoRepository.delete(licitacao);
			if (empregado.isPresent()) {
	        	atividadeEmpregadoService.registrar(empregado.get(), "DOCUMENTO LICITACAO #"+ id + " DELETADO");
	        }
			return ResponseEntity.noContent().build();
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@PutMapping(value = "/licitacao/{id}")
	public ResponseEntity<Licitacao> editarLicitacao(@PathVariable long id, @RequestBody LicitacaoDTO licitacaoDto) {
		ModelMapper mapper = new ModelMapper();
		
		Licitacao licitacao = licitacaoRepository.findById(id);
		licitacao = mapper.map(licitacaoDto, Licitacao.class);
		Licitacao licitacaoRetorno = licitacaoRepository.save(licitacao);

		return ResponseEntity.ok(licitacaoRetorno);
	}

}
