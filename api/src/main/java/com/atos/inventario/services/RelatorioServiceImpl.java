package com.atos.inventario.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.atos.inventario.atosdto.*;
import com.atos.inventario.repositories.*;

@Service
public class RelatorioServiceImpl implements RelatorioService {

    @Autowired
    ContratoRepository contratoRepository;

    @Autowired
    LicitacaoRepository licitacaoRepository;

    @Autowired
    FinanceiraRepository financeiraRepository;

    @Autowired
    PastaFuncionalRepository pastaFuncionalRepository;

    @Autowired
    OutroDocumentoRepository outrosDocRepository;

    @Autowired
    LocalizacaoRepository localizacaoRepository;

    @Autowired
    EmpregadoRepository empregadoRepository;

//	@Override
//	public RelatorioDocumentoUnidadeDTO gerarRelatorio1(FiltroRelatorioDocumentoUnidadeDTO filtro) {
//		RelatorioDocumentoUnidadeDTO relatorio = new RelatorioDocumentoUnidadeDTO();
//		relatorio.setFiltro(filtro);
//		Long numeroFila = 1L;
//
//		List<IRowCount> listaContrato = new ArrayList<>();
//		if (filtro.getPredio() == null) {
//			listaContrato.addAll(contratoRepository.pesquisaAgrupadaEndereco(filtro.getUnidade()));
//		} else {
//			listaContrato.addAll(contratoRepository.pesquisaAgrupadaEnderecoPredio(filtro.getUnidade(), filtro.getPredio()));
//		}
//
//		for(IRowCount x : listaContrato) {
//			String fila = "FILA"+numeroFila.toString();
//			relatorio.getEndereco().put(fila,x.getEndereco());
//			relatorio.getIndiceDocumento().put(fila, "CONTRATO");
//			relatorio.getTotalQuantidade().put(fila, x.getTotal().toString());
//
//			numeroFila++;
//		}
//
//		List<IRowCount> listaFinanceira = new ArrayList<>();
//		if (filtro.getPredio() == null) {
//			listaFinanceira.addAll(financeiraRepository.pesquisaAgrupadaEndereco(filtro.getUnidade()));
//		} else {
//			listaFinanceira.addAll(financeiraRepository.pesquisaAgrupadaEnderecoPredio(filtro.getUnidade(), filtro.getPredio()));
//		}
//
//		for(IRowCount x : listaFinanceira) {
//			String fila = "FILA"+numeroFila.toString();
//			relatorio.getEndereco().put(fila,x.getEndereco());
//			relatorio.getIndiceDocumento().put(fila, "FINANCEIRA");
//			relatorio.getTotalQuantidade().put(fila, x.getTotal().toString());
//
//			numeroFila++;
//		}
//
//		List<IRowCount> listaLicitacao = new ArrayList<>();
//		if (filtro.getPredio() == null) {
//			listaLicitacao.addAll(licitacaoRepository.pesquisaAgrupadaEndereco(filtro.getUnidade()));
//		} else {
//			listaLicitacao.addAll(licitacaoRepository.pesquisaAgrupadaEnderecoPredio(filtro.getUnidade(), filtro.getPredio()));
//		}
//
//		for(IRowCount x : listaLicitacao) {
//			String fila = "FILA"+numeroFila.toString();
//			relatorio.getEndereco().put(fila,x.getEndereco());
//			relatorio.getIndiceDocumento().put(fila, "LICITACAO");
//			relatorio.getTotalQuantidade().put(fila, x.getTotal().toString());
//
//			numeroFila++;
//		}
//
//		List<IRowCount> listaPastaFuncional = new ArrayList<>();
//		if (filtro.getPredio() == null) {
//			listaPastaFuncional.addAll(pastaFuncionalRepository.pesquisaAgrupadaEndereco(filtro.getUnidade()));
//		} else {
//			listaPastaFuncional.addAll(pastaFuncionalRepository.pesquisaAgrupadaEnderecoPredio(filtro.getUnidade(), filtro.getPredio()));
//		}
//
//		for(IRowCount x : listaPastaFuncional) {
//			String fila = "FILA"+numeroFila.toString();
//			relatorio.getEndereco().put(fila,x.getEndereco());
//			relatorio.getIndiceDocumento().put(fila, "PASTA_FUNCIONAL");
//			relatorio.getTotalQuantidade().put(fila, x.getTotal().toString());
//
//			numeroFila++;
//		}
//
//		List<IRowCount> listaOutroDoc = new ArrayList<>();
//		if (filtro.getPredio() == null) {
//			listaOutroDoc.addAll(outrosDocRepository.pesquisaAgrupadaEndereco(filtro.getUnidade()));
//		} else {
//			listaOutroDoc.addAll(outrosDocRepository.pesquisaAgrupadaEnderecoPredio(filtro.getUnidade(), filtro.getPredio()));
//		}
//
//		for(IRowCount x : listaOutroDoc) {
//			String fila = "FILA"+numeroFila.toString();
//			relatorio.getEndereco().put(fila,x.getEndereco());
//			relatorio.getIndiceDocumento().put(fila, "OUTROS DOC");
//			relatorio.getTotalQuantidade().put(fila, x.getTotal().toString());
//
//			numeroFila++;
//		}
//		return relatorio;
//	}

//	@Override
//	public RelatorioDocumentoUnidadeDTO getSizeDocsOnBoxes() {
//		RelatorioDocumentoUnidadeDTO relatorio = new RelatorioDocumentoUnidadeDTO();
//		Long numeroFila = 1L;
//
//		List<IRowCount> listaLocalizacao = new ArrayList<>();
//
//        listaLocalizacao.addAll(localizacaoRepository.getNumbersOfBoxByTypeDocs();
//
//		for(IRowCount x : listaLocalizacao) {
//			String fila = "FILA"+numeroFila.toString();
//			relatorio.getEndereco().put(fila,x.getEndereco());
//			relatorio.getTotalCaixas().put(fila, x.getTotal().toString());
//
//			numeroFila++;
//		}
//
//		return relatorio;
//	}

    public List<ReportDocumentAddressDTO> getReportAllDocTypesByAddress(String endereco_id) {
        List<ReportDocumentAddressDTO> relatorio = new ArrayList<>();
        long numeroFila = 1L;

        List<IRowCount> listaContrato = new ArrayList<>();
        if (endereco_id != null) {
            listaContrato.addAll(contratoRepository.pesquisaAgrupadaEndereco(Long.parseLong(endereco_id)));
        } else {
            listaContrato.addAll(contratoRepository.pesquisaAgrupadaEnderecoPredio());
        }

        for (IRowCount x : listaContrato) {
            relatorio.add(
                    new ReportDocumentAddressDTO("CONTRATOS", x.getTotal().toString(), x.getEndereco())
            );
        }

        if (listaContrato.size() == 0)
            relatorio.add(
                    new ReportDocumentAddressDTO("CONTRATOS", "0", null)
            );


        List<IRowCount> listaFinanceira = new ArrayList<>();
        if (endereco_id != null) {
            listaFinanceira.addAll(financeiraRepository.pesquisaAgrupadaEndereco(Long.parseLong(endereco_id)));
        } else {
            listaFinanceira.addAll(financeiraRepository.pesquisaAgrupadaEnderecoPredio());
        }

        for (IRowCount x : listaFinanceira) {
            relatorio.add(
                    new ReportDocumentAddressDTO("FINANCEIRA", x.getTotal().toString(), x.getEndereco())
            );
        }

        if (listaFinanceira.size() == 0)
            relatorio.add(
                    new ReportDocumentAddressDTO("FINANCEIRA", "0", null)
            );

        List<IRowCount> listaLicitacao = new ArrayList<>();
        if (endereco_id != null) {
            listaLicitacao.addAll(licitacaoRepository.pesquisaAgrupadaEndereco(Long.parseLong(endereco_id)));
        } else {
            listaLicitacao.addAll(licitacaoRepository.pesquisaAgrupadaEnderecoPredio());
        }

        for (IRowCount x : listaLicitacao) {
            relatorio.add(
                    new ReportDocumentAddressDTO("LICITAÇÃO", x.getTotal().toString(), x.getEndereco())
            );
        }

        if (listaLicitacao.size() == 0)
            relatorio.add(
                    new ReportDocumentAddressDTO("LICITAÇÃO", "0", null)
            );

        List<IRowCount> listaPastaFuncional = new ArrayList<>();
        if (endereco_id != null) {
            listaPastaFuncional.addAll(pastaFuncionalRepository.pesquisaAgrupadaEndereco(Long.parseLong(endereco_id)));
        } else {
            listaPastaFuncional.addAll(pastaFuncionalRepository.pesquisaAgrupadaEnderecoPredio());
        }

        for (IRowCount x : listaPastaFuncional) {
            relatorio.add(
                    new ReportDocumentAddressDTO("PASTA FUNCIONAL", x.getTotal().toString(), x.getEndereco())
            );
        }

        if (listaPastaFuncional.size() == 0)
            relatorio.add(
                    new ReportDocumentAddressDTO("PASTA FUNCIONAL", "0", null)
            );

        List<IRowCount> listaOutroDoc = new ArrayList<>();
        if (endereco_id != null) {
            listaOutroDoc.addAll(outrosDocRepository.pesquisaAgrupadaEndereco(Long.parseLong(endereco_id)));
        } else {
            listaOutroDoc.addAll(outrosDocRepository.pesquisaAgrupadaEnderecoPredio());
        }

        for (IRowCount x : listaOutroDoc) {
            relatorio.add(
                    new ReportDocumentAddressDTO("OUTROS DOCUMENTOS", x.getTotal().toString(), x.getEndereco())
            );
        }

        if (listaOutroDoc.size() == 0)
            relatorio.add(
                    new ReportDocumentAddressDTO("OUTROS DOCUMENTOS", "0", null)
            );
        return relatorio;
    }

    public List<ReportDocumentAddressDTO> getReportNumberOfBoxesByAllDocTypes() {
        List<ReportDocumentAddressDTO> relatorio = new ArrayList<>();
        long numeroFila = 1L;

        List<IRowCount> listaContrato = new ArrayList<>(contratoRepository.pesquisaAgrupadaEnderecoPredio());

        relatorio.add(
                new ReportDocumentAddressDTO("CONTRATOS", String.valueOf(listaContrato.size()), null)
        );

        List<IRowCount> listaFinanceira = new ArrayList<>(financeiraRepository.pesquisaAgrupadaEnderecoPredio());

        relatorio.add(
                new ReportDocumentAddressDTO("FINANCEIRA", String.valueOf(listaFinanceira.size()), null)
        );

        List<IRowCount> listaLicitacao = new ArrayList<>(licitacaoRepository.pesquisaAgrupadaEnderecoPredio());

        relatorio.add(
                new ReportDocumentAddressDTO("LICITAÇÃO", String.valueOf(listaLicitacao.size()), null)
        );

        List<IRowCount> listaPastaFuncional = new ArrayList<>(pastaFuncionalRepository.pesquisaAgrupadaEnderecoPredio());

        relatorio.add(
                new ReportDocumentAddressDTO("PASTA FUNCIONAL", String.valueOf(listaPastaFuncional.size()), null)
        );

        List<IRowCount> listaOutroDoc = new ArrayList<>(outrosDocRepository.pesquisaAgrupadaEnderecoPredio());
        relatorio.add(
                new ReportDocumentAddressDTO("OUTROS DOCUMENTOS", String.valueOf(listaOutroDoc.size()), null)
        );

        return relatorio;
    }

    public List<?> getReportAllDocTypesByUsers(String user_id) {
        List<IUsersRowCount> empregados;
        if (user_id != null) {
            empregados = empregadoRepository.findUserById(Long.parseLong(user_id));
        } else {
            empregados = empregadoRepository.findAllUsers();
        }
        List<ReportDocumentUserDTO> userDocuments = new ArrayList<>();

        for (IUsersRowCount iu : empregados) {

            List<Map<String, String>> qtdTiposDocs = new ArrayList<Map<String, String>>();
            int c = contratoRepository.findAllByUser(Long.parseLong(iu.getId()));
            int f = financeiraRepository.findAllByUser(Long.parseLong(iu.getId()));
            int l = licitacaoRepository.findAllByUser(Long.parseLong(iu.getId()));
            int p = pastaFuncionalRepository.findAllByUser(Long.parseLong(iu.getId()));
            int o = outrosDocRepository.findAllByUser(Long.parseLong(iu.getId()));
            int total = c + f + l + p + o;
            qtdTiposDocs.add(new HashMap<String, String>() {
                {
                    put("tipo", "CONTRATOS");
                    put("qtd", String.valueOf(c));
                }
            });

            qtdTiposDocs.add(new HashMap<String, String>() {
                {
                    put("tipo", "FINANCEIRA");
                    put("qtd", String.valueOf(f));
                }
            });

            qtdTiposDocs.add(new HashMap<String, String>() {
                {
                    put("tipo", "LICITAÇÃO");
                    put("qtd", String.valueOf(l));
                }
            });

            qtdTiposDocs.add(new HashMap<String, String>() {
                {
                    put("tipo", "PASTA FUNCIONAL");
                    put("qtd", String.valueOf(p));
                }
            });

            qtdTiposDocs.add(new HashMap<String, String>() {
                {
                    put("tipo", "OUTROS DOCUMENTOS");
                    put("qtd", String.valueOf(o));
                }
            });

            userDocuments.add(
                    new ReportDocumentUserDTO(Long.parseLong(iu.getId()), iu.getNome(), total, qtdTiposDocs)
            );
        }

        return userDocuments;
    }
}
