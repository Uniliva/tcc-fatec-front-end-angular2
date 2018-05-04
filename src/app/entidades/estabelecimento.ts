import { Sensor } from './sensor';
export class Estabelecimento {
    idEstabelecimento: Number;
    nome: string;
    endereco: string;
    telefone: string;
    email: string;
    sensores: Sensor[];
}
