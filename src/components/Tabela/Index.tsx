import { Table } from 'antd';
import type  { ColumnsType, TableProps} from 'antd/es/table';
import  { ReactElement } from 'react';
import { Paginacao } from '../../Interfaces/frutas';

type TabelaProps<T> = TableProps<T> & {
  dados: Array<T> | undefined;
  paginacao?: Paginacao | undefined;
  mudarPaginacao?: (page: number, pageSize: number) => void;
  colunas:  ColumnsType<T>;
};


function Tabela<T extends object = never> ({
  colunas,
  dados,
  onChange,
  ...rest
} : TabelaProps<T>)
  : ReactElement {
  return(
  <Table
    rowKey={"id"}
    columns={colunas as any}
    dataSource={dados}
    onChange={onChange}
    style={{ minHeight: 400}}
    size={"large"}
    {...rest}
    />
  )
}

export default Tabela