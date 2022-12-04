import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard/ProductCard'

const Home = () => {

  const [productList, setProductList] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProductList(json))
  }, [])


  return (
    <section className='mt-36 flex flex-wrap justify-center'>
      {productList.map((product) => {
        return <ProductCard key={product.title} product={product} />
      })}
    </section>
  )
}

export default Home