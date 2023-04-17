package com.atos.inventario.atosdto;

import java.io.Serializable;
import java.util.Map;

public class ReportDocumentUserDTO implements Serializable{

	private static final long serialVersionUID = 1L;

	private long idEmpregado;

	private String nome;
	private int total;
	private Map<String, String> qtdTiposDocs;

	public ReportDocumentUserDTO(long idEmpregado, String nome, int total, Map<String,String> qtdTiposDocs) {
		this.idEmpregado = idEmpregado;
		this.nome = nome;
		this.total = total;
		this.qtdTiposDocs = qtdTiposDocs;
	}

	public long getIdEmpregado() {
		return idEmpregado;
	}

	public void setIdEmpregado(long idEmpregado) {
		this.idEmpregado = idEmpregado;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public Map<String, String> getQtdTiposDocs() {
		return qtdTiposDocs;
	}

	public void setQtdTiposDocs(Map<String, String> qtdTiposDocs) {
		this.qtdTiposDocs = qtdTiposDocs;
	}
}
