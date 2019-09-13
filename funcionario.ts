///<reference path="pessoa.ts"/>
namespace Hospital
{
    export class Funcionario extends Pessoa
    {
        private _codFuncionario:number;
        
        public setCodFuncionario(codFuncionario:number){
            this._codFuncionario = codFuncionario;
        }

        public getCodFuncionario(){
            return this._codFuncionario;
        }
    }
}