import React from 'react'
import GenderCollection from '../gendercategory/GenderCollection'
import { Trending } from './brandcollection.js'

const Puma = () => {
  return (
    <div>
      <GenderCollection Collection={Trending} Category="Best Selling Shoes And Sneaker Release" />
    </div>
  )
}

export default Puma
