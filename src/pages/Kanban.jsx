import React from 'react'
import { Header } from '../components'
import { KanbanComponent, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-kanban/index.js'
import { kanbanData, kanbanGrid } from '../data/dummy.js'


export default function Kanban() {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='App' title='Kanban' />
      <KanbanComponent
        id='kanban'
        dataSource={kanbanData}
        cardSettings={{
          headerField: 'Id',
          contentField: 'Summary',
        }}
        keyField='Status'
      >
        <ColumnsDirective>
          { kanbanGrid.map((item, index)=> <ColumnDirective key={index} {...item} /> ) }
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}
