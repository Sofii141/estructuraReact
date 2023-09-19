import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { loginPage } from '../loginPage'
import { SignupPage } from '../signupPage'

export const AuthRoutes = () => {
    return (
        <>

            <div className='containerRoutes'>
                <Routes>
                    <Route path='login' element={<loginPage></loginPage>}></Route>
                    <Route path='register' element={<SignupPage></SignupPage>}></Route>
                    <Route path='/*' element={<Navigate to='/auth/login'></Navigate>}></Route>
                </Routes>
            </div>
        </>
    )
}