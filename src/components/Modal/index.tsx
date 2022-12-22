import React, { ReactElement} from 'react';
import { Modal as ModalAntd } from 'antd';

interface IModal {
  open :boolean
  onOk : () => void
  onCancel : () => void
  title : string
  children ?: ReactElement
}

function Modal  ({open,onOk, onCancel, children, title }: IModal)  {

  return (
      <ModalAntd
        title={title}
        open={open}
        onOk={onOk}
        onCancel={onCancel}>
        {children}
      </ModalAntd>
  );
};

export default Modal;