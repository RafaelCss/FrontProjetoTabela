import Tabela from "../../Tabela/Index"
import { Button, Space} from 'antd';
import useSWR from 'swr'
import React, { useEffect, useState } from 'react';
import { Layout, theme } from 'antd';
import { colunasTabela } from "./colunas";
import { IFrutas } from "../../../Interfaces/frutas";
import servico from "../../../lib/services/frutas";
import S from "./style"
import axios from "axios";
import Modal from "../../Modal";
import Formulario from "./formulario";
const {Content } = Layout;


function HomeFrutas({dados} : any){
    const { token: { colorBgContainer },} = theme.useToken();
    const [isModalOpen, setIsModalOpen] = useState(false);


    const { data , error, mutate, isValidating } =
    useSWR('Fruta', async () => await servico.buscarDados())

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };



    function handleModal (){
      setIsModalOpen(true);
    }


    return (
      <>
      <Layout className="site-layout">
        <Layout className="site-layout">
          <S.HeaderMod style={{ padding: 0, background: colorBgContainer}}>
          <S.ContainerTitulo>
            <S.Titulo className="d22sd3s-d4744w5wa" key={'h1-home'} id={'h1-home'}>
              Lista de Frutas
            </S.Titulo>
          </S.ContainerTitulo>
              <S.ContainerButton>
                <S.Botao danger>Cadastrar</S.Botao>
              </S.ContainerButton>
          </S.HeaderMod>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 500,
              background: colorBgContainer,
            }}
          >
            <Tabela<IFrutas>
             loading={!data || isValidating }
            colunas={colunasTabela({handleModal}) as any}
            dados={data as any}/>
          </Content>
        </Layout>
      </Layout>
      <Modal
      title="Fruta selecionada"
      onCancel={handleCancel}
      onOk={handleOk}
      open={isModalOpen}>
        <Formulario/>
      </Modal>
      </>
    );
  };


export default HomeFrutas


