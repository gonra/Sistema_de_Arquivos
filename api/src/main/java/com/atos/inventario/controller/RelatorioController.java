package com.atos.inventario.controller;

import com.atos.inventario.atosdto.ReportDocumentAddressDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.atos.inventario.services.RelatorioService;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class RelatorioController {
	
	@Autowired
	RelatorioService relatorioService;
	
//	@GetMapping("/relatorio1")
//	public ResponseEntity<RelatorioDocumentoUnidadeDTO> gerarRelatorio1(@RequestBody FiltroRelatorioDocumentoUnidadeDTO filtro) {
//		return ResponseEntity.ok(relatorioService.gerarRelatorio1(filtro));
//	}
//
//	@GetMapping("/relatorio2")
//	public ResponseEntity<RelatorioDocumentoUnidadeDTO> gerarRelatorio2(@RequestBody FiltroRelatorioDocumentoUnidadeDTO filtro) {
//		return ResponseEntity.ok(relatorioService.gerarRelatorio2(filtro));
//	}


	@GetMapping({"/reports/docs_address", "/reports/docs_address/{endereco}"})
	public ResponseEntity<List<ReportDocumentAddressDTO>> getReportAllDocTypesByAddress(@PathVariable(required = false)  String endereco) {
		return ResponseEntity.ok(relatorioService.getReportAllDocTypesByAddress(endereco));
	}

}
