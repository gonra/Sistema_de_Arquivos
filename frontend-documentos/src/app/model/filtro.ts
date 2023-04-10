export interface FiltroPesquisaEmpregadoDTO {
    nome?:String,
    matricula?:String,
    email?:String,
    departamentoid?:Number,
    ativo?:boolean
}

export interface FiltroPesquisaDocumentoDTO {
	tipoDocumento?:String,
	unidadeProdutoraId?:Number,
	classificacaoDocumentalId?:Number,
	dataLimite?:String,
	localizacao?:String
}

export interface FiltroRelatorioDocumentoUnidadeDTO {

}