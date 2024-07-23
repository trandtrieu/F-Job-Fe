import { Modal } from 'antd'
import React from 'react'

const ModalComponent = ({title = 'Modal', isOpen = false, children, ...rests}) => {
  return (
    // Modal để xác nhận khi xoá một sản phẩm, tránh xoá nhầm
      <Modal title={title} open={isOpen} {...rests}>
          {children}
      </Modal>
  )
}

export default ModalComponent