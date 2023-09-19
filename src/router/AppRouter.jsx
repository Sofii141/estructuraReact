import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { temaRoutes } from '../pages/routes/temaRoutes'

export const AppRouter = () => {
    return (
        <>
            <div className='containerRoutes'>

                <Routes>
                    <Route path='/auth/*'
                        element={<AuthRoutes></AuthRoutes>}>
                    </Route>

                    <Route path='/*'
                        element={<temaRoutes></temaRoutes>}>
                    </Route>
                </Routes>

            </div>
        </>
    )
}
