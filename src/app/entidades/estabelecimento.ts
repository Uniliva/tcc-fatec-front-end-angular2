import { Sensor } from './sensor';
export class Estabelecimento {
    id: Number;
    nome: string;
    endereco: string;
    telefone: string;
    email: string;
    sensor: Sensor;
    sensores: Sensor[];
}
