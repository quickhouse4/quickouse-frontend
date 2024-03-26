import React from 'react'
import Header from "./Header";
import Search from "./Search";
import Second from "./Second";
import Footer from "./Footer";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Home() {
  const [label, setLabel] = useState('');
  const params = useParams();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (params.slug) {
      setLabel(params.slug)
    }
  }, [params.slug])

  return (
    <>
      <Header setLabel={setLabel} />
      <Second label={label} setLoading={setLoading}/>
     {!loading && <Footer/>}
    </>)
}

export default Home