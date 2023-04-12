package com.atos.inventario.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "TB_ATIVIDADE")
public class AtividadeEmpregado implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 7991416973940242896L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idAtividadeEmpregado;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "cod_empregado", referencedColumnName = "idEmpregado")
	private Empregado empregado;
	
	@Column(nullable = false)
	private Date dataHora;
	private String atividade;
	
	
	
	public Long getIdAtividadeEmpregado() {
		return idAtividadeEmpregado;
	}
	public void setIdAtividadeEmpregado(Long idAtividadeEmpregado) {
		this.idAtividadeEmpregado = idAtividadeEmpregado;
	}
	public Empregado getEmpregado() {
		return empregado;
	}
	public void setEmpregado(Empregado empregado) {
		this.empregado = empregado;
	}
	public Date getDataHora() {
		return dataHora;
	}
	public void setDataHora(Date dataHora) {
		this.dataHora = dataHora;
	}
	public String getAtividade() {
		return atividade;
	}
	public void setAtividade(String atividade) {
		this.atividade = atividade;
	}
	

}
