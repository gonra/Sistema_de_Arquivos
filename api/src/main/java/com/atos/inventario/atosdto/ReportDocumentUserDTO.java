package com.atos.inventario.atosdto;

import java.io.Serializable;

public class ReportDocumentUserDTO implements Serializable{

	private static final long serialVersionUID = 1L;

	private long idEmpregado;

	private String nome;
	private int total;

	public ReportDocumentUserDTO(long idEmpregado, String nome, int total) {
		this.idEmpregado = idEmpregado;
		this.nome = nome;
		this.total = total;
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
}
