import { Location } from "./localizacao";

export interface Document {
    id?:Number,
    unidadeProdutora?: String,
    dataLimite?: String,
    dataCriacao?: String,
    localizacao?: Location,
    documentoEncaminhamento?: String,
    numeroCaixaEscritorioOrigem?: String,
    numeroCaixaArquivoCustodia?: String,
    numeroContrato?: String,
    numeroPec?: String,
    empresaContratada?: String,
    objetoResumido?: String,
    nomeEmpregado?: String,
    unidadeProdutoraDesc?: String,
    classificacaoDocumentalDesc?: String,
    matriculaEmpregado?: String,
    classificacaoDocumentalId?: Number
}

