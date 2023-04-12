export interface User {
    idEmpregado?:Number,
    matricula:String,
    nome:String,
    senha:String,
    departamentoId: Number,
    departamentoDesc: String,
    dataLogin:String,
    ativo:Boolean
}
