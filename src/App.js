import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/Navbar/Navbar'
import HomeComponent from './pages/Home/HomeComponent'
import ExerciseDetail from './pages/ExerciseDetail/ExerciseDetail'

import './App.css'

const App = () => {
  return (
    <>
        <Box>
            <Navbar /> 

            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/exercise/:id" element={<ExerciseDetail />} />
            </Routes>
        </Box>
    </>
  )
}

export default App