import React from 'react'
import { SideBar } from '../../components/SideBar'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../Home'
import { TemaPagina } from '../TemaPagina'

export const temaRoutes = () => {
    return (
        <>
            <SideBar></SideBar>

            <div className='containerRoutes'>
               <Routes>
                    <Route path='home' element={<Home></Home>}></Route>
                    <Route path='temaPagina' element={<TemaPagina></TemaPagina>}></Route>
                    <Route path='/' element={<Navigate to='/home'></Navigate>}></Route>
                </Routes>
            </div>
        </>
    )
}
