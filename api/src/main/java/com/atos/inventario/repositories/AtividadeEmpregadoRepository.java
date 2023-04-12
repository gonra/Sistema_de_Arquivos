package com.atos.inventario.repositories;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.atos.inventario.model.AtividadeEmpregado;
import com.atos.inventario.model.Empregado;

public interface AtividadeEmpregadoRepository extends JpaRepository<AtividadeEmpregado, Long> {

	List<AtividadeEmpregado> findAllByEmpregado(Empregado empregado);

}
