package com.atos.inventario.services;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.atos.inventario.atosdto.AtividadeEmpregadoDTO;
import com.atos.inventario.model.AtividadeEmpregado;
import com.atos.inventario.model.Empregado;
import com.atos.inventario.repositories.AtividadeEmpregadoRepository;

@Service
public class AtividadeEmpregadoServiceImpl implements AtividadeEmpregadoService{
	
	private static final String DATEPATTERN = "yyyyMMdd";
	
	
	@Autowired
	private AtividadeEmpregadoRepository atividadeRepo;

	@Override
	public void registrar(Empregado empregado, String atividade) {
		AtividadeEmpregado registro = new AtividadeEmpregado();
		registro.setDataHora(new Date());
		registro.setEmpregado(empregado);
		registro.setAtividade(atividade);
		atividadeRepo.save(registro);
	}

	@Override
	public List<AtividadeEmpregadoDTO> listarPorEmpregado(Empregado empregado) {
		
		return atividadeRepo.findAllByEmpregado(empregado)
				.stream()
				.map(x -> new AtividadeEmpregadoDTO(x)).collect(Collectors.toList());
	}

	@Override
	public List<AtividadeEmpregadoDTO> listarPorData(Date data) {
		SimpleDateFormat sdf = new SimpleDateFormat(DATEPATTERN);
		String dataStr = sdf.format(data);
		return atividadeRepo.findAll()
				.stream()
				.filter(x -> sdf.format(x.getDataHora()).equals(dataStr))
				.map(x -> new AtividadeEmpregadoDTO(x)).collect(Collectors.toList());
	}

}
