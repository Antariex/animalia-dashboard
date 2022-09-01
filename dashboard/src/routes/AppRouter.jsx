import React from 'react'
import {Routes, Route} from 'react-router-dom'
import WelcomePage from '../pages/WelcomePage'
import ProductsPage from '../pages/ProductsPage'
import UsersPage from '../pages/UsersPage'
import CategoriesPage from '../pages/CategoriesPage'
import ProductDetailsPage from '../pages/ProductDetailsPage'
import SideNav from '../components/SideNav'
import UserDetails from '../pages/UserDetails'

const AppRouter = () => {
  return (
    <>
        <SideNav/>
        <Routes>
            <Route path="/" element={<WelcomePage/>}></Route>
            <Route path="products" element={<ProductsPage/>}></Route>
            <Route path="users" element={<UsersPage/>}></Route>
            <Route path="categories" element={<CategoriesPage/>}></Route>
            <Route path="products/:id" element={<ProductDetailsPage/>}></Route>
            <Route path="users/:id" element={<UserDetails/>}></Route>
        </Routes>
    </>
  )
}

export default AppRouter