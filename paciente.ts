///<reference path="pessoa.ts"/>
namespace Hospital{

    export class Paciente extends Pessoa 
    {
        private _codPaciente:number;

        public setCodPaciente(codPaciente:number){
            this._codPaciente = codPaciente;
        }

        public getCodPaciente(){
            return this._codPaciente;
        }
    }

}