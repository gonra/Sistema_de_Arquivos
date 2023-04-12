package com.atos.inventario.services;

import java.util.Date;
import java.util.List;

import com.atos.inventario.atosdto.AtividadeEmpregadoDTO;
import com.atos.inventario.model.AtividadeEmpregado;
import com.atos.inventario.model.Empregado;

public interface AtividadeEmpregadoService {

	public void registrar(Empregado empregado, String atividade);
	
	public List<AtividadeEmpregadoDTO> listarPorEmpregado(Empregado empregado);
	
	public List<AtividadeEmpregadoDTO> listarPorData(Date data);
		
}
