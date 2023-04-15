package com.atos.inventario.services;

import java.util.ArrayList;
import java.util.List;

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
//	public RelatorioDocumentoUnidadeDTO gerarRelatorio2(FiltroRelatorioDocumentoUnidadeDTO filtro) {
//		RelatorioDocumentoUnidadeDTO relatorio = new RelatorioDocumentoUnidadeDTO();
//		relatorio.setFiltro(filtro);
//		Long numeroFila = 1L;
//
//		List<IRowCount> listaLocalizacao = new ArrayList<>();
//		if (filtro.getPredio() == null) {
//			listaLocalizacao.addAll(localizacaoRepository.pesquisaAgrupadaEndereco(filtro.getUnidade()));
//		} else {
//			listaLocalizacao.addAll(localizacaoRepository.pesquisaAgrupadaEnderecoPredio(filtro.getUnidade(), filtro.getPredio()));
//		}
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


    public List<ReportDocumentAddressDTO> getReportAllDocTypesByAddress(String endereco) {
        List<ReportDocumentAddressDTO> relatorio = new ArrayList<>();
        long numeroFila = 1L;

        List<IRowCount> listaContrato = new ArrayList<>();
        if (endereco != null) {
            listaContrato.addAll(contratoRepository.pesquisaAgrupadaEndereco(endereco));
        } else {
            listaContrato.addAll(contratoRepository.search());
        }

        for (IRowCount x : listaContrato) {
            relatorio.add(
                    new ReportDocumentAddressDTO("CONTRATOS", x.getTotal().toString())
            );
        }

        List<IRowCount> listaFinanceira = new ArrayList<>();
        if (endereco != null) {
            listaFinanceira.addAll(financeiraRepository.pesquisaAgrupadaEndereco(endereco));
        } else {
            listaFinanceira.addAll(financeiraRepository.search());
        }

        for (IRowCount x : listaFinanceira) {
            relatorio.add(
                    new ReportDocumentAddressDTO("FINANCEIRA", x.getTotal().toString())
            );
        }

        List<IRowCount> listaLicitacao = new ArrayList<>();
        if (endereco != null) {
            listaLicitacao.addAll(licitacaoRepository.pesquisaAgrupadaEndereco(endereco));
        } else {
            listaLicitacao.addAll(licitacaoRepository.search());
        }

        for (IRowCount x : listaLicitacao) {
            relatorio.add(
                    new ReportDocumentAddressDTO("LICITACAO", x.getTotal().toString())
            );
        }

        List<IRowCount> listaPastaFuncional = new ArrayList<>();
        if (endereco != null) {
            listaPastaFuncional.addAll(pastaFuncionalRepository.pesquisaAgrupadaEndereco(endereco));
        } else {
            listaPastaFuncional.addAll(pastaFuncionalRepository.search());
        }

        for (IRowCount x : listaPastaFuncional) {
            relatorio.add(
                    new ReportDocumentAddressDTO("PASTA_FUNCIONAL", x.getTotal().toString())
            );
        }

        List<IRowCount> listaOutroDoc = new ArrayList<>();
        if (endereco != null) {
            listaOutroDoc.addAll(outrosDocRepository.pesquisaAgrupadaEndereco(endereco));
        } else {
            listaOutroDoc.addAll(outrosDocRepository.search());
        }

        for (IRowCount x : listaOutroDoc) {
            relatorio.add(
                    new ReportDocumentAddressDTO("OUTROS DOCUMENTOS", x.getTotal().toString())
            );
        }
        return relatorio;
    }
}
