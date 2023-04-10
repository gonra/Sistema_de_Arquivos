package com.atos.inventario.enums;

public enum DepartamentoEmpregadoEnum {
	GERENCIA (1L,"GERE","GERENCIA"),
	COMPRAS (2L,"COMP","COMPRAS"),
	VENDAS (3L,"VEND","VENDAS"),
	RH (4L,"RH","RECURSOS HUMANOS"),
	MARKETING (5L,"MARK","MARKETING");
	
	private Long idDepartamento;
	private String sigla;
	private String descricao;
	
	private DepartamentoEmpregadoEnum(Long id, String sigla, String descricao) {
		this.idDepartamento = id;
		this.sigla = sigla;
		this.descricao = descricao;
	}

	public Long getIdDepartamento() {
		return idDepartamento;
	}

	public String getSigla() {
		return sigla;
	}

	public String getDescricao() {
		return descricao;
	}

	public static DepartamentoEmpregadoEnum getByCodigo(int codigo) {
		for (DepartamentoEmpregadoEnum item : values()) {
            if (item.getIdDepartamento() == codigo) {
				return item;
			}
		}
		return null;
	}
}
