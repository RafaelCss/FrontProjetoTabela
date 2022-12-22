
import { Button} from 'antd';
import { ColumnsType } from 'antd/es/table';
import { IFrutas } from '../../../../Interfaces/frutas';

interface Colunas {
  handleModal : () => void
}

  export const colunasTabela = ({handleModal} : Colunas) =>{
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
       render: (text) => <><Button type="primary"
       onClick={handleModal} >Selecionar
       </Button></>,
       align: 'center',
     },

   ]
   return colunas
  }