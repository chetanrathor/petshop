import React from 'react'

interface Props {
    height:string,
    width:string,
    image:string
}


const ProductImage = ({height,image,width}:Props) => {
  return (
    <div>
      <div className="d-flex flex-row justify-content-center align-item-center p-3 product_image-background">
        <img src={process.env.PUBLIC_URL + '/'+image} height={height} width={width} alt="" />
      </div>
    </div>
  )
}

export default ProductImage
