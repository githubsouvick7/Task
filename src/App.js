import React from 'react'
import ImageCatalog from './Components/ImageCatalog'
import { images, details } from './Components/Image'


const App = () => {
  return (
    <>
      <ImageCatalog images={images} details={details} />
    </>
  )
}

export default App

