import { Dados } from './dados';

export class Sensor {
    id: number;
    codigo: String;
    decricao: String;
    temperaturaMin: number;
    temperaturaMax: number;
    idEstabelecimento: Number;
    enderecoEstabelemento: String;
    nomeEstabelemento: String;
    status: Status;
    dados: Dados;

}


export class Status {
    public cor: String;
    public msg: String;

    popula( cor: String,  msg: String) {
        this.cor = cor;
        this.msg = msg;
    }
}

