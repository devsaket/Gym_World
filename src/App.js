import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomeComponent from './pages/Home/HomeComponent'
import ExerciseDetail from './pages/ExerciseDetail/ExerciseDetail'
import Footer from './components/Footer/Footer'



const App = () => {
  return (
    <>
        <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
            <Navbar /> 

            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/exercise/:id" element={<ExerciseDetail />} />
            </Routes>
            <Footer />
        </Box>
    </>
  )
}

export default App