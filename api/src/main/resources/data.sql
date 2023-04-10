insert into tb_empregado (id_empregado, departamento,email, matricula, nome,senha,ativo) values (1, 1,'admin@arquivo.org', 'admin', 'Administrador', '$2a$12$tve/U05J46t9H7Z7pPkR/uzRUcWZdvw14aUZvrw1w8bine4iv.3uO', true);
insert into tb_empregado (id_empregado, departamento,email, matricula, nome,senha,ativo) values (2, 2,'user1@arquivo.org', 'user1', 'Usuario1', '$2a$12$tve/U05J46t9H7Z7pPkR/uzRUcWZdvw14aUZvrw1w8bine4iv.3uO', true);
insert into tb_empregado (id_empregado, departamento,email, matricula, nome,senha,ativo) values (3, 3,'user2@arquivo.org', 'user2', 'Usuario2', '$2a$12$tve/U05J46t9H7Z7pPkR/uzRUcWZdvw14aUZvrw1w8bine4iv.3uO', true);

insert into tb_roles_empregado values (1,'ADMIN', 1,1);
insert into tb_roles_empregado values (2,'USER', 1,2);
insert into tb_roles_empregado values (3,'USER', 2,2);
insert into tb_roles_empregado values (4,'USER', 3,2);

insert into tb_classificacao_documental values (100,'OPERAÇÕES E SERVIÇOS AEROPORTUÁRIOS');
insert into tb_classificacao_documental values (101,'Normatização. Regulamentação');
insert into tb_classificacao_documental values (102,'Relacionamento Institucional');
insert into tb_classificacao_documental values (110,'COMERCIALIZAÇÃO DE SERVIÇOS E PRODUTOS AEROPORTUÁRIOS');
insert into tb_classificacao_documental values (111,'Desenvolvimento de produtos e serviços aeroportuários');
insert into tb_classificacao_documental values (112,'Prospecção de clientes e parceiros');
insert into tb_classificacao_documental values (113,'Gestão do Mix Comercial dos aeroportos');
insert into tb_classificacao_documental values (114,'Concessão de áreas dos aeródromos');
insert into tb_classificacao_documental values (115,'Gestão da qualidade de produtos e serviços aeroportuários');

insert into tb_unidade_produtora (id_unidade_produtora, sigla, descricao) values (100,'SEDE','SEDE');
insert into tb_unidade_produtora (id_unidade_produtora, sigla, descricao) values (101,'BSBA','Aeroporto de Brasilia');
insert into tb_unidade_produtora (id_unidade_produtora, sigla, descricao) values (102,'CONG','Aeroporto de Congonhas');
insert into tb_unidade_produtora (id_unidade_produtora, sigla, descricao) values (103,'MANU','Aeroporto de Manaus');

insert into tb_localizacao (id_localizacao, bloco, endereco, numero_caixa, posicao, predio, sala) 
values (1, 'A', 'RECEITA FEDERAL-SP', 'CX-201', 'N3', '42', '301');

insert into tb_arquivo_contrato (cod_classificaco_documental, data_criacao, data_limite, cod_empregado, cod_localizacao, cod_unidade_produtora, documento_encaminhamento, empresa_contratada, numero_caixa_arquivo_custodia, numero_caixa_escritorio_origem, numero_contrato, numero_pec, objeto_resumido, id) 
 values (100, now(), '2060-12-30', 1, 1, 100, 'CO-0100100', 'EMPRESA E001','CX100-1001002', 'CE100-201313', 'CT-0100102','PEC.3323', 'CONTRATO FORNECIMENTO TIJOLO MCMV', 1);