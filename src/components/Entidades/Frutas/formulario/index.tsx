import React, { useCallback, useEffect } from 'react';
import { Form, Input, Button, Space } from 'antd';
import { IFrutas } from '../../../../Interfaces/frutas';

interface DadosFormulario {
  dados : IFrutas
  limparFormulario : () => void
}
function Formulario({dados, limparFormulario} : DadosFormulario)  {
  const [form] = Form.useForm<IFrutas>();

  const initialRender = useCallback(() => {
    if (form) {
      if (dados) {
        form.setFieldsValue({ ...dados });
      } else {
        form.resetFields();
      }
    }
  }, [form, dados]);
  console.log(dados)
  useEffect(() => {
    initialRender();
  }, [initialRender]);

  function limparForm(){
    form.resetFields()
  }

  return (
    <Form
    name="form_item_path"
    layout="vertical"
    initialValues={{
      nome : dados.nome,
      valorA : dados.valorA,
      valorB : dados.valorB
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
        <Form.Item name="valorB" label="Resultado">
          <Input />
        </Form.Item>
       <Space>
      <Button type="primary" htmlType="submit">
        Dividir
      </Button>
      <Button type="primary" htmlType="submit">
        Multiplicar
      </Button>
      </Space>
    </Form>
  );
};

export default Formulario;