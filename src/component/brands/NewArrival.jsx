import React from 'react'
import GenderCollection from '../gendercategory/GenderCollection'
import { newArrivals } from './brandcollection.js'

const newArrival = () => {
  return (
    <div>
      <GenderCollection Collection={newArrivals} Category="New Shoes And Sneaker Release" />
    </div>
  )
}

export default newArrival
