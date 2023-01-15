import React, { useCallback, useEffect } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import servico from "../../lib/services/frutas";
import { FrutaPost, IFrutas } from '../../Interfaces/frutas';
import Modal from '../Modal';
import useSWR from 'swr'

interface DadosFormularioCad {
  mostrarFormulário : () => void
  isModalOpen : boolean
}

function FormularioCadastro({ mostrarFormulário, isModalOpen }: DadosFormularioCad) {
  const [form] = Form.useForm<IFrutas>();
  const { mutate } = useSWR('Fruta', async () => await servico.buscarDados())
  const initialRender = useCallback(()=>{
    if(form) return
  },[form])

  useEffect(()=>initialRender(),[initialRender])
    function cadastrarFruta(){
      form.validateFields().then(async ()=>{
      const registro : FrutaPost = form.getFieldsValue(true)
      const post =   await servico.cadastrar({
        nome : registro.nome,
        valorA : Number(registro.valorA),
        valorB : Number(registro.valorB),
       })
        if(post === "Cadastrado"){
          mostrarFormulário()
          mutate()
        }
      })
    }

    useEffect(() =>{
      if(isModalOpen === false) form.resetFields()
    },[isModalOpen, form])

  return (
    <Modal
    title="Fruta selecionada"
    onCancel={mostrarFormulário}
    onOk={cadastrarFruta}
    open={isModalOpen}>
    <Form form={form} name="form_item_path" layout="vertical">
      <Form.Item name="nome" label="Descricão">
        <Input />
      </Form.Item>
      <Form.Item name="valorA" label="Valor A">
        <Input />
      </Form.Item>
      <Form.Item name="valorB" label="Valor B">
        <Input />
      </Form.Item>
    </Form>
    </Modal>
  );
};

export default FormularioCadastro;


