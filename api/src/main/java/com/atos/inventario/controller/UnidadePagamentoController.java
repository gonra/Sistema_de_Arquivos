package com.atos.inventario.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.atos.inventario.atosdto.ListaDTO;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UnidadePagamentoController {

	private String [] lista = { "CONTABILIDADE GERAL","GASTOS GERAIS","GASTOS EXTRAORDINARIOS","GASTOS OPERATIVOS","INVESTIMENTO"};
	
	@GetMapping(value = "/unidadespagamento")
	public ResponseEntity<ListaDTO> listar() {
		ListaDTO result = new ListaDTO();

		for (int i= 0 ; i< lista.length; i++) {
			result.getLista().add(lista[i]);
		}
		
		return ResponseEntity.ok(result);
	}
}