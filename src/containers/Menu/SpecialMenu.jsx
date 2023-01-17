import React from 'react'
import { Menuitem, SubHeading } from '../../components'
import { data, images } from '../../constants'
import "./specialmenu.css"
const SpecialMenu = () => {
  return (
    <div className="app__specialMenu  flex__center section__padding" id="Menu">
        <div className="app__specialMenu-title ">
          <SubHeading title="Menu that fits you palatte"/>
          <h1 className="headtext__cormorant">Today’s Special</h1>
        </div>

        <div className="app__specialMenu-menu  app__wrapper">
            <div className="app__specialMenu-menu_wine flex__center app__wrapper_info">
              <p className=" app__specialMenu-menu_heading">Wine & Beer</p>
              <div className='app__specialMenu-menu_wine-list'>
                {
                  data.wines.map((item,index)=><Menuitem title={item.title} price={item.price} tag={item.tags} key={item.title + index}/>)
                }
              </div>
            </div>
            <div className="app__specialMenu-menu_img " style={{marginLeft:0}}>
                <img src={images.menu}  alt="menuImg"/>
            </div>
            <div className="app__specialMenu-menu_cocktails flex__center app__wrapper_info">
            <p className=" app__specialMenu-menu_heading">Cocktails</p>
              <div className='app__specialMenu-menu_wine-list'>
                {
                  data.cocktails.map((item,index)=><Menuitem title={item.title} price={item.price} tag={item.tags} key={item.title + index}/>)
                }
              </div>
            </div>
        </div>  
        <div>
          <button type="button" className='custom__button'>View More</button>
        </div>
    </div>
  )
}

export default SpecialMenu