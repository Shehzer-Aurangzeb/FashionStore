import React from 'react'
import { Modal, ModalProps } from 'antd'
import "./Modal.sass"
interface IProps{
    children:React.ReactNode
}

function CustomModal(props:IProps & ModalProps) {
    const {children,...restProps}= props
  return (
    <Modal
    footer={null}
    maskClosable={false}
    {...restProps}

  >
  <div className='pt-12'></div>
   {children}
   <div className='pb-12'></div>
  </Modal>
  )
}

export default CustomModal