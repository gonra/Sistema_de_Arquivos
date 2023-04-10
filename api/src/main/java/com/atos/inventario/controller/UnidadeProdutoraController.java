package com.atos.inventario.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.atos.inventario.model.UnidadeProdutora;
import com.atos.inventario.repositories.UnidadeProdutoraRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UnidadeProdutoraController {

	@Autowired
	private UnidadeProdutoraRepository unidadeProdutoraRepository;

    @GetMapping(value = "/unidadesprodutoras")
    public ResponseEntity<List<UnidadeProdutora>> list() {
    	return ResponseEntity.ok(unidadeProdutoraRepository.findAll());
    }


}

