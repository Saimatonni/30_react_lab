import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import AddTextBox from '../Pages/TextBox'
import TaskManager from '../Pages/TaskManager'

const Routers = () => {
  return (
    <Routes>
       <Route path ='/' element={<Navigate to = '/text' />}/>
       <Route path='/text' element={<AddTextBox/>}/>
       <Route path='/task' element={<TaskManager/>}/>
    </Routes>
  )
}

export default Routers
