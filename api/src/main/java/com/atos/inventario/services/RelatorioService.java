package com.atos.inventario.services;

import com.atos.inventario.atosdto.FiltroRelatorioDocumentoUnidadeDTO;
import com.atos.inventario.atosdto.RelatorioDocumentoUnidadeDTO;
import com.atos.inventario.atosdto.ReportDocumentAddressDTO;

import java.util.List;

public interface RelatorioService {
	
//	public RelatorioDocumentoUnidadeDTO gerarRelatorio1(FiltroRelatorioDocumentoUnidadeDTO filtro);
//
//	public RelatorioDocumentoUnidadeDTO gerarRelatorio2(FiltroRelatorioDocumentoUnidadeDTO filtro);

	List<ReportDocumentAddressDTO> getReportAllDocTypesByAddress(String endereco);

	List<?> getReportAllDocTypesByUsers(String user_id);
}
