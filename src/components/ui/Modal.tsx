import React from 'react';
import { Button, message, Popconfirm } from 'antd';


interface IProps {
    title?:string;
    description?:string;
    onConfirm?:()=>void;
    onCancel?:()=>void;
    children:React.ReactNode;
}
const Modal = ({title,description,onCancel,onConfirm,children}:IProps) => (
  <Popconfirm
    title={title}
    description="Are you sure to delete this task?"
    onConfirm={onConfirm}
    onCancel={onCancel}
    okText="Yes"
    cancelText="No"
  >
   {children}
  </Popconfirm>
);

export default Modal;