import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ContactPage } from './ContactPage'
import { HomePage } from './HomePage'
import { HydrophonicSetup } from './HydrophonicSetup'
import { KnowlagePage } from './KnowlagePage'

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            {/* <Route path='/knowlage' element={<KnowlagePage />} /> */}
            <Route path='/hydrophonicSetup' element={<HydrophonicSetup />} />
            <Route path='/contact' element={<ContactPage />} />
        </Routes>
    )
}
