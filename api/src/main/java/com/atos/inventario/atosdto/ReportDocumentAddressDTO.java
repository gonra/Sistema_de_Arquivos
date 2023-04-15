package com.atos.inventario.atosdto;

import java.io.Serializable;

public class ReportDocumentAddressDTO implements Serializable{

	private static final long serialVersionUID = 1L;

	private String totalQuantidade;

	private String indiceDocumento;

	public ReportDocumentAddressDTO(String documento, String qtd) {
		this.totalQuantidade =  qtd;
		this.indiceDocumento = documento;
	}

	public String getTotalQuantidade() {
		return totalQuantidade;
	}

	public void setTotalQuantidade(String totalQuantidade) {
		this.totalQuantidade = totalQuantidade;
	}

	public String getIndiceDocumento() {
		return indiceDocumento;
	}

	public void setIndiceDocumento(String indiceDocumento) {
		this.indiceDocumento = indiceDocumento;
	}
}
