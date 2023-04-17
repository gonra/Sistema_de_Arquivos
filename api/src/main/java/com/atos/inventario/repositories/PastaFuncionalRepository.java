package com.atos.inventario.repositories;

import com.atos.inventario.model.PastaFuncional;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PastaFuncionalRepository extends JpaRepository<PastaFuncional, Long> {

	PastaFuncional findById(long id);
	
	@Query("SELECT count(c) as total, c.localizacao.endereco as endereco from PastaFuncional c where c.localizacao.idLocalizacao = :endereco_id group by c.localizacao.endereco")
	List<IRowCount> pesquisaAgrupadaEndereco(@Param("endereco_id") long endereco_id);

	@Query("SELECT count(c) as total from PastaFuncional c")
	List<IRowCount> search();
	
	@Query("SELECT count(c) as total, c.localizacao.endereco||';'||c.localizacao.predio as endereco from PastaFuncional c group by c.localizacao.endereco, c.localizacao.predio")
	List<IRowCount> pesquisaAgrupadaEnderecoPredio(String endereco,String predio);

	@Query("SELECT count(c) as total from PastaFuncional c where c.empregado.idEmpregado = :user_id")
	int findAllByUser(@Param("user_id") long user_id);
}