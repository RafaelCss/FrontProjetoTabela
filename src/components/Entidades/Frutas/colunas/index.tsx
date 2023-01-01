
import { Button} from 'antd';
import { ColumnsType } from 'antd/es/table';
import { IFrutas } from '../../../../Interfaces/frutas';
import { ListagemFrutasProps } from '../Index';

interface Colunas {
  pegarDadosColuna : ( value : IFrutas, visivel : boolean) => void
  mostrarModal : ListagemFrutasProps
}

  export const colunasTabela = ({pegarDadosColuna, mostrarModal} : Colunas) =>{
  const colunas : ColumnsType<IFrutas> = [
     {
       title: 'Descrição',
       dataIndex: 'nome',
       width: '25%',
       key :"nome",
       sorter : true,
       align: 'center'
     },
     {
       title: 'A',
       dataIndex: 'valorA',
       width: '40%',
       key : "valorA",
       sorter : true,
       align: 'center'
     },
     {
       title: 'B',
       dataIndex: 'valorB',
       width: '40%',
       key: "valorB",
       sorter : true,
       align: 'center'
     },
     {
       title: 'Ação',
       dataIndex: 'acao',
       shouldCellUpdate: (record: IFrutas) =>{ return record.id === mostrarModal.fruta?.id},
       render: (value, record : IFrutas, index ) => (<Button type="primary"
       onClick={() => pegarDadosColuna(record, true)}>Selecionar
       </Button>),
       align: 'center',
     },

   ]
   return colunas
  }