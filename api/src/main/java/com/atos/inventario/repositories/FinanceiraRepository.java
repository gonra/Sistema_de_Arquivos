package com.atos.inventario.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.atos.inventario.model.Financeira;
import org.springframework.data.repository.query.Param;

public interface FinanceiraRepository extends JpaRepository<Financeira, Long> {

	Financeira findById(long id);

	@Query("SELECT count(c) as total from Financeira c where UPPER(c.localizacao.endereco) like CONCAT('%', UPPER(:endereco), '%')")
	List<IRowCount> pesquisaAgrupadaEndereco(@Param("endereco") String endereco);

	@Query("SELECT count(c) as total from Financeira c")
	List<IRowCount> search();
	
	@Query("SELECT count(c) as total, c.localizacao.endereco||';'||c.localizacao.predio as endereco from Financeira c group by c.localizacao.endereco, c.localizacao.predio")
	List<IRowCount> pesquisaAgrupadaEnderecoPredio(String endereco,String predio);
}
