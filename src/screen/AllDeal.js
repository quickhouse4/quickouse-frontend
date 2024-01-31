import React ,{ useState } from 'react'
import Deal from '../components/Deal'
import Footer from '../components/Footer'
import Header from '../components/Header'

const AllDeal = () => {
  const [label , setLabel] = useState()
  return (
    <>
      <Header setLabel={setLabel}/>
      <Deal />
    </>
  )
}

export default AllDeal