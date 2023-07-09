import { useRef, useState } from 'react'
import { Box, ButtonDelete, ButtonEdit, ButtonView, Table, ButtonConfigs, ButtonCreate, Modal, Panel } from '../../../components'
import axios from "axios"
import { toast } from 'react-hot-toast'
import { New } from './modal/New'

export const Products = () => {

  const tableRef = useRef<any>()

  const [showModal, setShowModal] = useState(false)

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3036/products/${id}`)
      
      toast.success("Registro deletado com sucesso")

      tableRef.current.refetch()
    } catch (error) {
      toast.error("Erro ao realizar ação")
    }
  }

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  return (
    <Panel title="Produtos" actions={<ButtonCreate onClick={handleShowModal} />}>
      <Modal state={[showModal, setShowModal]} title="Adicionar produto">
        <New />
      </Modal>

      <Table
        ref={tableRef}
        endpoint="http://localhost:3036/products" 
        columns={[
          {
            name: "id",
            label: "Index"
          }, {
            name: "name",
            label: "Nome"
          }, {
            name: "price",
            label: "Preço",
            render: (data: any) => `R$ ${data}`
          }, {
            name: "id",
            label: "Ações",
            render: (data: any) => (
              <Box className='flex gap-3'>
                <ButtonConfigs />
                <ButtonView />
                <ButtonEdit />
                <ButtonDelete onClick={() => handleDelete(data)} />
              </Box>
            )
          }
        ]} 
      />
    </Panel>
  )
}