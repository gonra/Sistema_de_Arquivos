package com.atos.inventario.atosdto;

import java.io.Serializable;
import java.text.SimpleDateFormat;

import com.atos.inventario.model.AtividadeEmpregado;

public class AtividadeEmpregadoDTO implements Serializable{

	private static final long serialVersionUID = 4452393140432243791L;

	private static final String DATEPATTERN = "dd/MM/yyyy hh:mm";
	
	private Long id;
	private String empregado;
	private String data;
	private String atividade;
	
	public AtividadeEmpregadoDTO(AtividadeEmpregado atividadeEmpregado) {
		this.id = atividadeEmpregado.getIdAtividadeEmpregado();
		this.empregado = atividadeEmpregado.getEmpregado().getNome();
		SimpleDateFormat sdf = new SimpleDateFormat(DATEPATTERN);
		this.data = sdf.format(atividadeEmpregado.getDataHora());
		this.atividade = atividadeEmpregado.getAtividade();
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getEmpregado() {
		return empregado;
	}
	public void setEmpregado(String empregado) {
		this.empregado = empregado;
	}
	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}
	public String getAtividade() {
		return atividade;
	}
	public void setAtividade(String atividade) {
		this.atividade = atividade;
	}
	
}
