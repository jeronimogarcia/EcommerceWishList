import React from 'react'

const ButtonCustom = ({ title, action }) => {
  return (
    <button onClick={action} className='mt-2 p-1 bg-pink-800 text-white min-w-full hover:text-blue-500 hover:shadow-[0px_0px_30px_1px_rgba(2,165,233,0.3)]'>
      {title}
    </button>
  )
}

export default ButtonCustom