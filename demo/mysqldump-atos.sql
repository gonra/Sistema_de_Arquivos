-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: atos
-- ------------------------------------------------------
-- Server version	5.5.5-10.6.11-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (10);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_arquivo_contrato`
--

DROP TABLE IF EXISTS `tb_arquivo_contrato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_arquivo_contrato` (
  `id` bigint(20) NOT NULL,
  `data_criacao` datetime(6) DEFAULT NULL,
  `data_limite` datetime(6) DEFAULT NULL,
  `documento_encaminhamento` varchar(255) DEFAULT NULL,
  `cod_classificaco_documental` bigint(20) DEFAULT NULL,
  `cod_empregado` bigint(20) DEFAULT NULL,
  `cod_localizacao` bigint(20) DEFAULT NULL,
  `cod_unidade_produtora` bigint(20) DEFAULT NULL,
  `empresa_contratada` varchar(255) DEFAULT NULL,
  `numero_caixa_arquivo_custodia` varchar(255) DEFAULT NULL,
  `numero_caixa_escritorio_origem` varchar(255) DEFAULT NULL,
  `numero_contrato` varchar(255) DEFAULT NULL,
  `numero_pec` varchar(255) DEFAULT NULL,
  `objeto_resumido` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_pix52gi37ru0gp44tmx4bgx2v` (`cod_classificaco_documental`),
  KEY `FK_fx7cdt0j92n4ssnlnbum98tfj` (`cod_empregado`),
  KEY `FK_isu34b02r57q4lgpbuo0j7bu` (`cod_localizacao`),
  KEY `FK_5eqai1a10830s80i4d8dp5eck` (`cod_unidade_produtora`),
  CONSTRAINT `FK_5eqai1a10830s80i4d8dp5eck` FOREIGN KEY (`cod_unidade_produtora`) REFERENCES `tb_unidade_produtora` (`id_unidade_produtora`),
  CONSTRAINT `FK_fx7cdt0j92n4ssnlnbum98tfj` FOREIGN KEY (`cod_empregado`) REFERENCES `tb_empregado` (`id_empregado`),
  CONSTRAINT `FK_isu34b02r57q4lgpbuo0j7bu` FOREIGN KEY (`cod_localizacao`) REFERENCES `tb_localizacao` (`id_localizacao`),
  CONSTRAINT `FK_pix52gi37ru0gp44tmx4bgx2v` FOREIGN KEY (`cod_classificaco_documental`) REFERENCES `tb_classificacao_documental` (`codigo_classificacao_documental`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_arquivo_contrato`
--

LOCK TABLES `tb_arquivo_contrato` WRITE;
/*!40000 ALTER TABLE `tb_arquivo_contrato` DISABLE KEYS */;
INSERT INTO `tb_arquivo_contrato` VALUES (1,'2023-04-15 17:52:21.000000','2060-12-30 00:00:00.000000','CO-0100100',100,1,1,100,'EMPRESA E001','CX100-1001002','CE100-201313','CT-0100102','PEC.3323','CONTRATO FORNECIMENTO TIJOLO MCMV');
/*!40000 ALTER TABLE `tb_arquivo_contrato` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_atividade`
--

DROP TABLE IF EXISTS `tb_atividade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_atividade` (
  `id_atividade_empregado` bigint(20) NOT NULL AUTO_INCREMENT,
  `atividade` varchar(255) DEFAULT NULL,
  `data_hora` datetime(6) NOT NULL,
  `cod_empregado` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id_atividade_empregado`),
  KEY `FKeviek5k1vluvpdqss8cpg5pks` (`cod_empregado`),
  CONSTRAINT `FKeviek5k1vluvpdqss8cpg5pks` FOREIGN KEY (`cod_empregado`) REFERENCES `tb_empregado` (`id_empregado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_atividade`
--

LOCK TABLES `tb_atividade` WRITE;
/*!40000 ALTER TABLE `tb_atividade` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_atividade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_classificacao_documental`
--

DROP TABLE IF EXISTS `tb_classificacao_documental`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_classificacao_documental` (
  `codigo_classificacao_documental` bigint(20) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`codigo_classificacao_documental`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_classificacao_documental`
--

LOCK TABLES `tb_classificacao_documental` WRITE;
/*!40000 ALTER TABLE `tb_classificacao_documental` DISABLE KEYS */;
INSERT INTO `tb_classificacao_documental` VALUES (100,'OPERAÇÕES E SERVIÇOS AEROPORTUÁRIOS'),(101,'Normatização. Regulamentação'),(102,'Relacionamento Institucional'),(110,'COMERCIALIZAÇÃO DE SERVIÇOS E PRODUTOS AEROPORTUÁRIOS'),(111,'Desenvolvimento de produtos e serviços aeroportuários'),(112,'Prospecção de clientes e parceiros'),(113,'Gestão do Mix Comercial dos aeroportos'),(114,'Concessão de áreas dos aeródromos'),(115,'Gestão da qualidade de produtos e serviços aeroportuários');
/*!40000 ALTER TABLE `tb_classificacao_documental` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_empregado`
--

DROP TABLE IF EXISTS `tb_empregado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_empregado` (
  `id_empregado` bigint(20) NOT NULL AUTO_INCREMENT,
  `ativo` bit(1) NOT NULL,
  `data_login` datetime(6) DEFAULT NULL,
  `departamento` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `matricula` varchar(255) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `senha` varchar(255) NOT NULL,
  PRIMARY KEY (`id_empregado`),
  UNIQUE KEY `UK_j1lb1xdojxycge5icgbqu5y4o` (`matricula`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_empregado`
--

LOCK TABLES `tb_empregado` WRITE;
/*!40000 ALTER TABLE `tb_empregado` DISABLE KEYS */;
INSERT INTO `tb_empregado` VALUES (1,'',NULL,1,'admin@arquivo.org','admin','Administrador','$2a$12$tve/U05J46t9H7Z7pPkR/uzRUcWZdvw14aUZvrw1w8bine4iv.3uO'),(2,'',NULL,2,'user1@arquivo.org','user1','Usuario1','$2a$12$tve/U05J46t9H7Z7pPkR/uzRUcWZdvw14aUZvrw1w8bine4iv.3uO'),(3,'',NULL,3,'user2@arquivo.org','user2','Usuario2','$2a$12$tve/U05J46t9H7Z7pPkR/uzRUcWZdvw14aUZvrw1w8bine4iv.3uO'),(4,'',NULL,0,'user123@arquivo.org','user123','abc','$2a$10$6kr5BmmwzIHVoZfBHkc7fuuQTQUUaiSu40I4nsD33eO4AQBVxWF66');
/*!40000 ALTER TABLE `tb_empregado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_financeira`
--

DROP TABLE IF EXISTS `tb_financeira`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_financeira` (
  `id` bigint(20) NOT NULL,
  `data_criacao` datetime(6) DEFAULT NULL,
  `data_limite` datetime(6) DEFAULT NULL,
  `documento_encaminhamento` varchar(255) DEFAULT NULL,
  `cod_classificaco_documental` bigint(20) DEFAULT NULL,
  `cod_empregado` bigint(20) DEFAULT NULL,
  `cod_localizacao` bigint(20) DEFAULT NULL,
  `cod_unidade_produtora` bigint(20) DEFAULT NULL,
  `data_pagamento` datetime(6) DEFAULT NULL,
  `numero_caixa_arquivo_custodia` varchar(255) DEFAULT NULL,
  `numero_caixa_escritorio_origem` varchar(255) DEFAULT NULL,
  `unidade_pagamento` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_t2504l93v9sdgh1qrofe9i665` (`cod_classificaco_documental`),
  KEY `FK_siqli9uh429a70sidx9jgox9h` (`cod_empregado`),
  KEY `FK_s6syl2bi6mk8vnmtgslxtdfxn` (`cod_localizacao`),
  KEY `FK_cnsondi2oomiuu1mmn5k7ihgt` (`cod_unidade_produtora`),
  CONSTRAINT `FK_cnsondi2oomiuu1mmn5k7ihgt` FOREIGN KEY (`cod_unidade_produtora`) REFERENCES `tb_unidade_produtora` (`id_unidade_produtora`),
  CONSTRAINT `FK_s6syl2bi6mk8vnmtgslxtdfxn` FOREIGN KEY (`cod_localizacao`) REFERENCES `tb_localizacao` (`id_localizacao`),
  CONSTRAINT `FK_siqli9uh429a70sidx9jgox9h` FOREIGN KEY (`cod_empregado`) REFERENCES `tb_empregado` (`id_empregado`),
  CONSTRAINT `FK_t2504l93v9sdgh1qrofe9i665` FOREIGN KEY (`cod_classificaco_documental`) REFERENCES `tb_classificacao_documental` (`codigo_classificacao_documental`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_financeira`
--

LOCK TABLES `tb_financeira` WRITE;
/*!40000 ALTER TABLE `tb_financeira` DISABLE KEYS */;
INSERT INTO `tb_financeira` VALUES (2,NULL,'2022-12-30 21:00:00.000000','CO-0100100',100,1,2,102,NULL,'CX100-1001001','CE100-201314',NULL);
/*!40000 ALTER TABLE `tb_financeira` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_licitacao`
--

DROP TABLE IF EXISTS `tb_licitacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_licitacao` (
  `id` bigint(20) NOT NULL,
  `data_criacao` datetime(6) DEFAULT NULL,
  `data_limite` datetime(6) DEFAULT NULL,
  `documento_encaminhamento` varchar(255) DEFAULT NULL,
  `cod_classificaco_documental` bigint(20) DEFAULT NULL,
  `cod_empregado` bigint(20) DEFAULT NULL,
  `cod_localizacao` bigint(20) DEFAULT NULL,
  `cod_unidade_produtora` bigint(20) DEFAULT NULL,
  `numero_caixa_arquivo_custodia` varchar(255) DEFAULT NULL,
  `numero_caixa_escritorio_origem` varchar(255) DEFAULT NULL,
  `numero_pec` varchar(255) DEFAULT NULL,
  `numero_processo_licitatorio` varchar(255) DEFAULT NULL,
  `objeto_resumido` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_ar4cfb1s0ob1fnh2hpbigd8fx` (`cod_classificaco_documental`),
  KEY `FK_olluyjbdj8omft26mkccvss29` (`cod_empregado`),
  KEY `FK_ligfatd93ec5ychy813qixvll` (`cod_localizacao`),
  KEY `FK_dvlgj5itd0ejxis3e5s4ce0et` (`cod_unidade_produtora`),
  CONSTRAINT `FK_ar4cfb1s0ob1fnh2hpbigd8fx` FOREIGN KEY (`cod_classificaco_documental`) REFERENCES `tb_classificacao_documental` (`codigo_classificacao_documental`),
  CONSTRAINT `FK_dvlgj5itd0ejxis3e5s4ce0et` FOREIGN KEY (`cod_unidade_produtora`) REFERENCES `tb_unidade_produtora` (`id_unidade_produtora`),
  CONSTRAINT `FK_ligfatd93ec5ychy813qixvll` FOREIGN KEY (`cod_localizacao`) REFERENCES `tb_localizacao` (`id_localizacao`),
  CONSTRAINT `FK_olluyjbdj8omft26mkccvss29` FOREIGN KEY (`cod_empregado`) REFERENCES `tb_empregado` (`id_empregado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_licitacao`
--

LOCK TABLES `tb_licitacao` WRITE;
/*!40000 ALTER TABLE `tb_licitacao` DISABLE KEYS */;
INSERT INTO `tb_licitacao` VALUES (6,NULL,'2022-12-30 21:00:00.000000','CO-0100100',100,4,2,102,'CX100-1001001','CE100-201314','PEC.3322',NULL,'CONTRATO FORNECIMENTO TIJOLO MCMV');
/*!40000 ALTER TABLE `tb_licitacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_localizacao`
--

DROP TABLE IF EXISTS `tb_localizacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_localizacao` (
  `id_localizacao` bigint(20) NOT NULL AUTO_INCREMENT,
  `bloco` varchar(255) DEFAULT NULL,
  `endereco` varchar(255) DEFAULT NULL,
  `numero_caixa` varchar(255) DEFAULT NULL,
  `posicao` varchar(255) DEFAULT NULL,
  `predio` varchar(255) DEFAULT NULL,
  `sala` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_localizacao`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_localizacao`
--

LOCK TABLES `tb_localizacao` WRITE;
/*!40000 ALTER TABLE `tb_localizacao` DISABLE KEYS */;
INSERT INTO `tb_localizacao` VALUES (1,'A','RECEITA FEDERAL-SP','CX-201','N3','42','301'),(2,'A','RECEITA FEDERAL-SP','CX-200','N3','40','301'),(3,'A','RECEITA FEDERAL-SP','CX-200','N3','41','301'),(4,'A','RECEITA FEDERAL-SP','CX-200','N4','40','301');
/*!40000 ALTER TABLE `tb_localizacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_outrodocumento`
--

DROP TABLE IF EXISTS `tb_outrodocumento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_outrodocumento` (
  `id` bigint(20) NOT NULL,
  `data_criacao` datetime(6) DEFAULT NULL,
  `data_limite` datetime(6) DEFAULT NULL,
  `documento_encaminhamento` varchar(255) DEFAULT NULL,
  `cod_classificaco_documental` bigint(20) DEFAULT NULL,
  `cod_empregado` bigint(20) DEFAULT NULL,
  `cod_localizacao` bigint(20) DEFAULT NULL,
  `cod_unidade_produtora` bigint(20) DEFAULT NULL,
  `numero_caixa_arquivo_custodia` varchar(255) DEFAULT NULL,
  `numero_caixa_escritorio_origem` varchar(255) DEFAULT NULL,
  `objeto_resumido` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_1m4t1gjwdle2xdinbarhw2phs` (`cod_classificaco_documental`),
  KEY `FK_nlpxmcj4j89ex2d8mrmkijv9s` (`cod_empregado`),
  KEY `FK_qyvpopeooh8ivi61a6gnwolw5` (`cod_localizacao`),
  KEY `FK_75kw0at132rmcsaxrmjivsa2c` (`cod_unidade_produtora`),
  CONSTRAINT `FK_1m4t1gjwdle2xdinbarhw2phs` FOREIGN KEY (`cod_classificaco_documental`) REFERENCES `tb_classificacao_documental` (`codigo_classificacao_documental`),
  CONSTRAINT `FK_75kw0at132rmcsaxrmjivsa2c` FOREIGN KEY (`cod_unidade_produtora`) REFERENCES `tb_unidade_produtora` (`id_unidade_produtora`),
  CONSTRAINT `FK_nlpxmcj4j89ex2d8mrmkijv9s` FOREIGN KEY (`cod_empregado`) REFERENCES `tb_empregado` (`id_empregado`),
  CONSTRAINT `FK_qyvpopeooh8ivi61a6gnwolw5` FOREIGN KEY (`cod_localizacao`) REFERENCES `tb_localizacao` (`id_localizacao`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_outrodocumento`
--

LOCK TABLES `tb_outrodocumento` WRITE;
/*!40000 ALTER TABLE `tb_outrodocumento` DISABLE KEYS */;
INSERT INTO `tb_outrodocumento` VALUES (4,NULL,'2022-12-30 21:00:00.000000','CO-0100100',100,1,4,103,'CX100-1001001','CE100-201314','CONTRATO FORNECIMENTO TIJOLO MCMV');
/*!40000 ALTER TABLE `tb_outrodocumento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_pastafuncional`
--

DROP TABLE IF EXISTS `tb_pastafuncional`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_pastafuncional` (
  `id` bigint(20) NOT NULL,
  `data_criacao` datetime(6) DEFAULT NULL,
  `data_limite` datetime(6) DEFAULT NULL,
  `documento_encaminhamento` varchar(255) DEFAULT NULL,
  `cod_classificaco_documental` bigint(20) DEFAULT NULL,
  `cod_empregado` bigint(20) DEFAULT NULL,
  `cod_localizacao` bigint(20) DEFAULT NULL,
  `cod_unidade_produtora` bigint(20) DEFAULT NULL,
  `numero_caixa_arquivo_custodia` varchar(255) DEFAULT NULL,
  `numero_caixa_escritorio_origem` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_qdu5h1fonlh2bwpwr8o35wqis` (`cod_classificaco_documental`),
  KEY `FK_90q4f1qbo4u6n1v6kukbglxpg` (`cod_empregado`),
  KEY `FK_ih1lvi0jy40kgj7v66qicsiin` (`cod_localizacao`),
  KEY `FK_n1kj68xl9ce477a43njt0wnh3` (`cod_unidade_produtora`),
  CONSTRAINT `FK_90q4f1qbo4u6n1v6kukbglxpg` FOREIGN KEY (`cod_empregado`) REFERENCES `tb_empregado` (`id_empregado`),
  CONSTRAINT `FK_ih1lvi0jy40kgj7v66qicsiin` FOREIGN KEY (`cod_localizacao`) REFERENCES `tb_localizacao` (`id_localizacao`),
  CONSTRAINT `FK_n1kj68xl9ce477a43njt0wnh3` FOREIGN KEY (`cod_unidade_produtora`) REFERENCES `tb_unidade_produtora` (`id_unidade_produtora`),
  CONSTRAINT `FK_qdu5h1fonlh2bwpwr8o35wqis` FOREIGN KEY (`cod_classificaco_documental`) REFERENCES `tb_classificacao_documental` (`codigo_classificacao_documental`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_pastafuncional`
--

LOCK TABLES `tb_pastafuncional` WRITE;
/*!40000 ALTER TABLE `tb_pastafuncional` DISABLE KEYS */;
INSERT INTO `tb_pastafuncional` VALUES (3,NULL,'2022-12-30 21:00:00.000000','CO-0100100',100,1,3,103,'CX100-1001001','CE100-201314');
/*!40000 ALTER TABLE `tb_pastafuncional` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_roles_empregado`
--

DROP TABLE IF EXISTS `tb_roles_empregado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_roles_empregado` (
  `id_role_empregado` bigint(20) NOT NULL AUTO_INCREMENT,
  `nome_role` varchar(255) DEFAULT NULL,
  `id_empregado` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id_role_empregado`),
  KEY `FK4awcrd2mwk2b5pvde9bqwpxw2` (`role_id`),
  KEY `FK15i1avp42jfmh7984u16iklet` (`id_empregado`),
  CONSTRAINT `FK15i1avp42jfmh7984u16iklet` FOREIGN KEY (`id_empregado`) REFERENCES `tb_empregado` (`id_empregado`),
  CONSTRAINT `FK4awcrd2mwk2b5pvde9bqwpxw2` FOREIGN KEY (`role_id`) REFERENCES `tb_roles_empregado` (`id_role_empregado`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_roles_empregado`
--

LOCK TABLES `tb_roles_empregado` WRITE;
/*!40000 ALTER TABLE `tb_roles_empregado` DISABLE KEYS */;
INSERT INTO `tb_roles_empregado` VALUES (1,'ADMIN',1,1),(2,'USER',1,2),(3,'USER',2,2),(4,'USER',3,2),(5,NULL,4,2);
/*!40000 ALTER TABLE `tb_roles_empregado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_unidade_produtora`
--

DROP TABLE IF EXISTS `tb_unidade_produtora`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_unidade_produtora` (
  `id_unidade_produtora` bigint(20) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `sigla` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_unidade_produtora`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_unidade_produtora`
--

LOCK TABLES `tb_unidade_produtora` WRITE;
/*!40000 ALTER TABLE `tb_unidade_produtora` DISABLE KEYS */;
INSERT INTO `tb_unidade_produtora` VALUES (100,'SEDE','SEDE'),(101,'Aeroporto de Brasilia','BSBA'),(102,'Aeroporto de Congonhas','CONG'),(103,'Aeroporto de Manaus','MANU');
/*!40000 ALTER TABLE `tb_unidade_produtora` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'atos'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-15 15:07:22
