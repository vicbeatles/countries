import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

export const Layout = (props) => {


  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}