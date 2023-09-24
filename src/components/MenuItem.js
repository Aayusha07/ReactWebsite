import React from 'react'

function MenuItem({image, name, price}) {
  return (
    <div className="menuItem">
      <diV style={{ backgroundImage: `url(${image})` }}></diV>
      <h1> {name}</h1>
      <p>${price}</p>
    </div>
  )
}

export default MenuItem
