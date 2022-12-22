import React from 'react';
import { Form, Input, Button, Space } from 'antd';


function Formulario()  {
  const onFinish = (value: object) => {
    console.log(value);
  };

  return (
    <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
          <Form.Item name="descricao" label="Descricão">
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