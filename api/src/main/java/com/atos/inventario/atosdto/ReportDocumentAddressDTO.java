package com.atos.inventario.atosdto;

import java.io.Serializable;

public class ReportDocumentAddressDTO implements Serializable{

	private static final long serialVersionUID = 1L;

	private String totalQuantidade;

	private String indiceDocumento;
	private String endereco;

	public ReportDocumentAddressDTO(String documento, String qtd, String endereco) {
		this.totalQuantidade =  qtd;
		this.indiceDocumento = documento;
		this.endereco = endereco;
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

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
}
