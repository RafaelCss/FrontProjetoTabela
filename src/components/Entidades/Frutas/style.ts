import styled from "styled-components";
import { Button, Layout, theme } from 'antd';
const { Header, Content } = Layout;

const ContainerTitulo = styled.div`
 display: flex ;
 width : 250px;
 margin-left: 50px;
 align-items: center;
 flex-direction :row;
 justify-content: space-between;
`
const Titulo = styled.h1`
  display :flex;
  width : 200px;
  align-items : center;
  justify-content : center;
`

const ContainerButton = styled.div`
 display : flex;
 width : 200px;
 height : 80px;
 margin-top: 15px;
`

const Botao = styled(Button)`

`

const HeaderMod = styled(Header)`
  display : flex;
  flex-direction : row;
  width : 100%;
  height : 80px;
 justify-content: space-between;
`

// eslint-disable-next-line import/no-anonymous-default-export
export default {Titulo, ContainerTitulo, ContainerButton, HeaderMod, Botao}

