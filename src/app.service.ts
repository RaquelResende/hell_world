import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  bsm():string {
    return "<ol><li>Comunicação;</li><li>proatividade;</li><li>Responsabilidade Pessoal;</li><li>Mentalidade de crescimento;</li> <li>Orientação ao futuro;</li> <li>Persistênci;</li><li>adaptalidade;</li> <li>Trabalho em Equipe</li></ol>";
  }
bj(): string {
  return "Exercitar os conseitos do nest"
}

}
