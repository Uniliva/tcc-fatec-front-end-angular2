import { Sensor } from './sensor';
export class Estabelecimento {
    idEstabelecimento: Number;
    nome: String;
    endereco: String;
    telefone: String;
    email: String;
    sensores: Sensor[];
}
