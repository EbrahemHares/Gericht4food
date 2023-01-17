import React from 'react'
import "./menuitem.css"

const Menuitem = ({title, price, tag}) => {
  return (
    <div className="app__specialmenu-items">
      <div className="app__specialmenu-items_wrapper">
        <div className="app__specialmenu-items_wrapper-info">
          <h4 className="p__cormorant">{title}</h4>
        </div>
        <div />
        <div className="app__specialmenu-items_wrapper-price">
          <p className='p__cormorant'>{price}</p>
        </div>
      </div>
      <div className="app__specialmenu-items_sub">
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tag}</p>
    </div>
    </div>
  )
}

export default Menuitem