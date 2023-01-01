import Tabela from "../../Tabela/Index"
import useSWR from 'swr'
import React, {  useEffect, useState } from 'react';
import { Layout, theme } from 'antd';
import { colunasTabela } from "./colunas";
import { IFrutas } from "../../../Interfaces/frutas";
import servico from "../../../lib/services/frutas";
import S from "./style"
import Formulario from "./formulario";
import FormularioCadastro from "../../FormularioCad";
const {Content } = Layout;

export type ListagemFrutasProps = {
  fruta?: IFrutas;
  visivel: boolean;
};


function HomeFrutas(){
    const { token: { colorBgContainer },} = theme.useToken();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalCad, setIsModalCad] = useState(false);
    const [mostrarModal, setMostrarModal] = useState<ListagemFrutasProps>({
      fruta: undefined,
      visivel: false
    });
    const [fruta, setFruta] = useState<IFrutas>();

    const { data , error, mutate, isValidating } =
    useSWR('Fruta', async () => await servico.buscarDados())

    function pegarDadosColuna( value : IFrutas, visivel : boolean ){
      setMostrarModal({fruta: value , visivel: visivel})
      setIsModalOpen(mostrarModal.visivel);
      setFruta(mostrarModal.fruta)
      mutate()
    }

    useEffect(()=>{
      mutate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[mostrarModal])

   function limparFormulario(){
      setIsModalOpen(false);
    }

    function cadastrarFruta(){
      setIsModalCad(true)
      mutate();
    }

    function mostrarFormulario(){
      setIsModalCad(false)
      mutate();
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
                <S.Botao danger onClick={cadastrarFruta}>Cadastrar</S.Botao>
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
            colunas={colunasTabela({pegarDadosColuna, mostrarModal}) as any}
            dados={data}/>
          </Content>
        </Layout>
      </Layout>
        <Formulario dados={fruta} limparFormulario={limparFormulario} isModalOpen={isModalOpen}/>
        <FormularioCadastro mostrarFormulário={mostrarFormulario} isModalOpen={isModalCad} />
      </>
    );
  };


export default HomeFrutas


