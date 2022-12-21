
import { Button} from 'antd';
import { ColumnsType } from 'antd/es/table';
import { IFrutas } from '../../../../Interfaces/frutas';


  export const colunasTabela : ColumnsType<IFrutas> =  [
     {
       title: 'Descrição',
       dataIndex: 'nome',
       width: '25%',
       key :"nome"
     },
     {
       title: 'A',
       dataIndex: 'valorA',
       width: '40%',
       key : "valorA"
     },
     {
       title: 'B',
       dataIndex: 'valorB',
       width: '40%',
       key: "valorB"

     },
     {
       title: 'Ação',
       dataIndex: 'acao',
       render: (text) => <><Button type="primary" >Selecionar</Button></>,
     },

   ];
