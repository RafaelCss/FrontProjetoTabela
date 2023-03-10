import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Form, Input, Button, Space } from 'antd';
import { IFrutas } from '../../../../Interfaces/frutas';
import Modal from '../../../Modal';

interface DadosFormulario {
  dados ?: IFrutas
  limparFormulario : () => void
  isModalOpen : boolean
}
function Formulario({dados, limparFormulario , isModalOpen} : DadosFormulario)  {
  const [form] = Form.useForm<IFrutas>();
  const [operacao, setOperacao] = useState<number>()

  const initialRender = useCallback(() => {
    if (form) {
      if (dados) {
        form.setFieldsValue({...dados, resultado : operacao});
      } else {
        form.resetFields();
      }
    }
  }, [form, dados, operacao]);

  useEffect(() => {
    initialRender();
  }, [initialRender]);



   function  multiplicar(){
   const valorA  = form.getFieldValue('valorA')
   const valorB = form.getFieldValue('valorB')
   const resultado = Number(valorA * valorB)
    setOperacao(resultado)
  }

  function dividir(){
    const valorA  = form.getFieldValue('valorA')
    const valorB = form.getFieldValue('valorB')
    const resultado = Number(valorA / valorB)
     setOperacao(resultado)
   }
   const handleOk = () => {
    limparForm()
    limparFormulario()
    setOperacao(0)
  };

  const handleCancel = () => {
    limparForm()
    limparFormulario()
    setOperacao(0)
  };

  function limparForm(){
    form.resetFields()
  }


  return (

    <Modal
    title="Fruta selecionada"
    onCancel={handleCancel}
    onOk={handleOk}
    open={isModalOpen}>
    <Form
    form={form}
    name="form_item_path"
    layout="vertical"
      initialValues={{
        nome : dados?.nome,
        valorA : dados?.valorA,
        valorB: dados?.valorB,
        resultado : operacao
    }}>
          <Form.Item name="nome" label="Descricão">
            <Input />
          </Form.Item>
          <Form.Item name="valorA" label="Valor A">
            <Input />
          </Form.Item>
        <Form.Item name="valorB" label="Valor B">
          <Input />
        </Form.Item>
        <Form.Item name="resultado" label="Resultado">
          <Input />
        </Form.Item>
        <div style={{display:"flex", alignItems:"center", width:"100%", justifyContent:"center"}}>
        <Button type="primary" onClick={dividir} style={{margin:"10px 20px"}}>
          Dividir
        </Button>
        <Button type="primary" onClick={multiplicar}>
          Multiplicar
        </Button>
      </div>

    </Form>
    </Modal>
  );
};

export default Formulario;