package com.atos.inventario.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.atos.inventario.model.Contrato;
import org.springframework.data.repository.query.Param;

public interface ContratoRepository extends JpaRepository<Contrato, Long> {

	Contrato findById(long id);
	
//	@Query("SELECT count(c) as total from Contrato c  where UPPER(c.localizacao.endereco) like CONCAT('%', UPPER(:endereco), '%')")
	@Query("SELECT count(c) as total, c.localizacao.endereco as endereco from Contrato c  where c.localizacao.idLocalizacao = :endereco_id group by c.localizacao.endereco")
	List<IRowCount> pesquisaAgrupadaEndereco(@Param("endereco_id") long endereco_id);

	@Query("SELECT count(c) as total from Contrato c")
	List<IRowCount> search();
	
	@Query("SELECT count(c) as total, c.localizacao.endereco||';'||c.localizacao.predio as endereco from Contrato c group by c.localizacao.endereco, c.localizacao.predio")
	List<IRowCount> pesquisaAgrupadaEnderecoPredio(String endereco,String predio);

	@Query("SELECT count(c) as total from Contrato c where c.empregado.idEmpregado = :user_id")
	int findAllByUser(@Param("user_id") long user_id);
}