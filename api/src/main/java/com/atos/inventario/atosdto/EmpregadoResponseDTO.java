package com.atos.inventario.atosdto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.atos.inventario.model.Empregado;

public class EmpregadoResponseDTO implements Serializable{

	private static final long serialVersionUID = 1L;

	private Long idEmpregado;
	private String matricula;
	private String nome;
	private String email;
	private int departamentoId;
	private String departamentoDesc;
	private Boolean ativo;
	private List<String> roles = new ArrayList<String>();


	
	public EmpregadoResponseDTO(Empregado empregado) {
		this.idEmpregado = empregado.getIdEmpregado();
		this.matricula = empregado.getMatricula();
		this.nome = empregado.getNome();
		this.email = empregado.getEmail();
		this.ativo = empregado.isAtivo();

		this.roles.addAll(empregado.getRoles().stream().map(x -> x.getNomeRole()).collect(Collectors.toList()));
		this.departamentoId = empregado.getDepartamentoId();
		this.departamentoDesc = empregado.getDepartamentoDesc();
	}

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

	public String getDepartamentoDesc() {
		return departamentoDesc;
	}

	public void setDepartamentoDesc(String departamentoDesc) {
		this.departamentoDesc = departamentoDesc;
	}

	public List<String> getRoles() {
		return roles;
	}

	public void setRoles(List<String> roles) {
		this.roles = roles;
	}
	
	
}
