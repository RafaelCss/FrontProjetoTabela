

export interface IFrutas {
  id : number | string
  nome : string
  valorA : number
  valorB : number
}

interface Filtro {

}
export interface Dictionary<T> {
  [Key: string]: T;
}


export interface Resposta<T> {
  sucesso: boolean;
  errors?: Dictionary<string[]>;
  retorno?: T;
  paginacao?: Paginacao;
}

export interface Paginacao {
  pagina: number;
  totalPorPagina: number;
  total?: number;
}
