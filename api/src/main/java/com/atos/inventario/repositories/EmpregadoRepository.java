package com.atos.inventario.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.atos.inventario.model.Empregado;
import org.springframework.data.repository.query.Param;

public interface EmpregadoRepository extends JpaRepository<Empregado, Long> {
	
	@Query("SELECT e FROM Empregado e WHERE e.matricula=:matricula and e.senha =:senha ")
	public Optional<Empregado> findByMatriculaSenha(String matricula, String senha);
	
	public Optional<Empregado> findByMatricula(String matricula);

	@Query("SELECT e FROM Empregado e WHERE e.ativo = true ")
	public List<Empregado> findByAtivoTrue();

	@Query("SELECT e.idEmpregado as id, e.nome as nome  FROM Empregado e order by e.nome")
	List<IUsersRowCount> findAllUsers();

	@Query("SELECT e.idEmpregado as id, e.nome as nome  FROM Empregado e where e.idEmpregado = :user_id")
	List<IUsersRowCount> findUserById(@Param("user_id") Long user_id);

	public Optional<Empregado> findById(Long id);
	
}