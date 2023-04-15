package com.atos.inventario.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;


@Configuration
public class DataConfiguration {

	@Value("${atos.storedb}")
	private String storedb;
	
	@Value("${atos.db.driver}")
	private String driverdb;
	
	@Value("${atos.db.url}")
	private String urldb;	
	
	@Value("${atos.db.user}")
	private String userdb;
	
	@Value("${atos.db.password}")
	private String passdb;

	
	@Bean
	public DataSource dataSource() {
		DriverManagerDataSource manager=new DriverManagerDataSource();

		if (storedb.contains("DEMO")) {			
			manager.setDriverClassName("org.hsqldb.jdbcDriver");
			manager.setUrl("jdbc:hsqldb:mem:Demo");
			manager.setUsername("SA");
			manager.setPassword("");	
		} else {
			manager.setDriverClassName(driverdb);
			manager.setUrl(urldb);
			manager.setUsername(userdb);
			manager.setPassword(passdb);
		}
		return manager;
		
	}
	
	@Bean
	public JpaVendorAdapter jpaVendorAdapter() {
		HibernateJpaVendorAdapter adapter=new HibernateJpaVendorAdapter();
		if (storedb.contains("DEMO")) {
			adapter.setDatabase(Database.HSQL);
			adapter.setGenerateDdl(true);
		} else {
			adapter.setDatabase(Database.MYSQL);
			adapter.setGenerateDdl(false);
		}
		adapter.setShowSql(true);
		adapter.setPrepareConnection(true);
		return adapter;
	}
	
}
