import { Dados } from './dados';

export class Sensor {
    id;
    codigo;
    decricao;
    temperaturaMin;
    temperaturaMax;
    idEstabelecimento;
    enderecoEstabelemento;
    nomeEstabelemento;
    status;
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

