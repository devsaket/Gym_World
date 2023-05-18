import React, {useState} from 'react'
import {Box} from '@mui/material'

import HeroBanner from '../../components/HeroBanner/HeroBanner'
import Exercises from '../../components/Exercises/Exercises'
import SearchExercises from '../../components/SearchExercises/SearchExercises'


const HomeComponent = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  )
}

export default HomeComponent