package com.atos.inventario.controller;

import com.atos.inventario.model.ClassificacaoDocumental;
import com.atos.inventario.model.Localizacao;
import com.atos.inventario.repositories.ClassificacaoDocumentalRepository;
import com.atos.inventario.repositories.LocalizacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class LocalizacaoController {
	
	@Autowired
    LocalizacaoRepository localizacaoRepository;
	
    @GetMapping(value = "/localizacoes")
    public ResponseEntity<List<Localizacao>> list() {
    	return ResponseEntity.ok(localizacaoRepository.findAll());
    }

}
