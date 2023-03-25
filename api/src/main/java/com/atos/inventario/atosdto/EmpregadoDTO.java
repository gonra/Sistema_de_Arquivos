package com.atos.inventario.atosdto;

import java.io.Serializable;

import com.atos.inventario.enums.DepartamentoEmpregadoEnum;

public class EmpregadoDTO implements Serializable{

	private static final long serialVersionUID = 1L;

	private Long idEmpregado;
	private String matricula;
	private String nome;
	private String email;
	private int departamentoId;
	private Boolean ativo;
	private String senha;

	public Long getIdEmpregado() {
		return idEmpregado;
	}

	public void setIdEmpregado(Long idEmpregado) {
		this.idEmpregado = idEmpregado;
	}

	public String getMatricula() {
		return matricula;
	}

	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDepartamento() {
		return DepartamentoEmpregadoEnum.getByCodigo(this.departamentoId).getDescricao();
	}
	
	public int getDepartamentoId() {
		return departamentoId;
	}

	public void setDepartamentoId(int departamentoId) {
		this.departamentoId = departamentoId;
	}

	public Boolean getAtivo() {
		return ativo;
	}

	public void setAtivo(Boolean ativo) {
		this.ativo = ativo;
	}
	
	public void setSenha(String senha) {
		this.senha = senha;
	}
	
}
