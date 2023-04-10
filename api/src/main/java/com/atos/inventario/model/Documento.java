package com.atos.inventario.model;

import java.util.Date;

import javax.persistence.*;


import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class Documento {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private Date dataCriacao;
	private Date dataLimite;
	private String documentoEncaminhamento;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "cod_unidade_produtora", referencedColumnName = "idUnidadeProdutora")
	private UnidadeProdutora unidadeProdutora;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "cod_classificaco_documental", referencedColumnName = "codigoClassificacaoDocumental")
	private ClassificacaoDocumental classificacaoDocumental;

	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "cod_empregado", referencedColumnName = "idEmpregado")
	private Empregado empregado;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "cod_localizacao", referencedColumnName = "idLocalizacao")
	private Localizacao localizacao;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	@JsonIgnore
	public UnidadeProdutora getUnidadeProdutora() {
		return unidadeProdutora;
	}
	public Long getUnidadeProdutoraId() {
		return unidadeProdutora.getIdUnidadeProdutora();
	}
	public String getUnidadeProdutoraDesc() {
		return unidadeProdutora.getDescricao();
	}
	public void setUnidadeProdutora(UnidadeProdutora unidadeProdutora) {
		this.unidadeProdutora = unidadeProdutora;
	}
	
	@JsonIgnore
	public ClassificacaoDocumental getClassificacaoDocumental() {
		return classificacaoDocumental;
	}
	public Long getClassificacaoDocumentalId() {
		return classificacaoDocumental.getCodigoClassificacaoDocumental();
	}
	public String getClassificacaoDocumentalDesc() {
		return this.classificacaoDocumental.getDescricao();
	}
	public void setClassificacaoDocumental(ClassificacaoDocumental classificacaoDocumental) {
		this.classificacaoDocumental = classificacaoDocumental;
	}
	public Date getDataLimite() {
		return dataLimite;
	}
	public void setDataLimite(Date dataLimite) {
		this.dataLimite = dataLimite;
	}
	public String getMatriculaEmpregado() {
		return empregado.getMatricula();
	}
	public String getNomeEmpregado() {
		return empregado.getNome();
	}
	@JsonIgnore 
	public Empregado getEmpregado() {
		return empregado;
	}
	public void setEmpregado(Empregado empregado) {
		this.empregado = empregado;
	}
	public Date getDataCriacao() {
		return dataCriacao;
	}
	public void setDataCriacao(Date dataCriacao) {
		this.dataCriacao = dataCriacao;
	}
	public Localizacao getLocalizacao() {
		return localizacao;
	}
	public void setLocalizacao(Localizacao localizacao) {
		this.localizacao = localizacao;
	}
	public String getDocumentoEncaminhamento() {
		return documentoEncaminhamento;
	}
	public void setDocumentoEncaminhamento(String documentoEncaminhamento) {
		this.documentoEncaminhamento = documentoEncaminhamento;
	}
	
}
