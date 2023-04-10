package com.atos.inventario.atosdto;

import java.io.Serializable;
import java.util.List;

public class ListaDTO implements Serializable{

	private static final long serialVersionUID = 4947692711484595572L;
	
	private List<String> lista;

	public List<String> getLista() {
		return lista;
	}

	public void setLista(List<String> lista) {
		this.lista = lista;
	} 
	
	
}
