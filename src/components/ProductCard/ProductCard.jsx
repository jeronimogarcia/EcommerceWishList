import React, { useContext } from 'react'
import ButtonCustom from '../ButtonCustom/ButtonCustom'
import { UserContext } from "../../context/UserContext";

const ProductCard = ({ product }) => {

  const { addProductToWishList, addProductToCartList } = useContext(UserContext);

  return (
    <div className='w-[360px] m-[30px] flex flex-col items-center relative bg-gray-100'>
      <div className='h-72 p-2'>
        <img
          className='h-full max-w-[340px]'
          src={product.image}
          alt={product.title}
        />
      </div>
      <p className='text-center mx-10 my-2 min-h-[64px] border-b border-neutral-600 font-semibold text-lg'>{product.title}</p>
      <p className='my-2'><span className='font-semibold'>Price: </span><span>${product.price}</span></p>
      <ButtonCustom title="Wish List" action={() => addProductToWishList(product)}/>
      <ButtonCustom title="Add to Cart" action={() => addProductToCartList(product)}/>
    </div>
  )
}

export default ProductCard