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

	@GetMapping({ "/reports/docs_address/{endereco_id}"})
	public ResponseEntity<List<ReportDocumentAddressDTO>> getReportAllDocTypesByAddress(@PathVariable(required = false)  String endereco_id) {
		return ResponseEntity.ok(relatorioService.getReportAllDocTypesByAddress(endereco_id));
	}

	@GetMapping({"/reports/docs_boxes"})
	public ResponseEntity<List<ReportDocumentAddressDTO>> getReportNumberOfBoxesByAllDocTypes() {
		return ResponseEntity.ok(relatorioService.getReportNumberOfBoxesByAllDocTypes());
	}

	@GetMapping({"/reports/docs_users", "/reports/docs_users/{user_id}"})
	public ResponseEntity<List<?>> getReportAllDocTypesByUsers(@PathVariable(required = false)  String user_id) {
		return ResponseEntity.ok(relatorioService.getReportAllDocTypesByUsers(user_id));
	}

}
