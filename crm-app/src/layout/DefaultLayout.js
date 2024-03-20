import React from 'react'
import { Header } from './partials/Header.comp'
import { Footer } from './partials/Footer.comp'


const DefaultLayout = () => {
  return (
    <div>
     <Header />
     main page content
        <Footer />
    </div>
  )
}

export default DefaultLayout
