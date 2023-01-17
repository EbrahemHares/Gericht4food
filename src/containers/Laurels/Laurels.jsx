import React from 'react'
import {images, data} from "../../constants"
import { SubHeading } from '../../components'
import "./Laurels.css"
const Laurels = () => {
  return (
    <div className="app__laurels app__bg section__padding app__wrapper" id="Awards">
      <div className="app__wrapper_info">
        <div className="app__laurels-title">
          <SubHeading title="Awards & recognition" />
          <h1 className="headtext__cormorant">Our Laurels</h1>
        </div>
        <div className="app__laurels-content">
          {data.awards.map((award,index)=>(
            <div className="app__laurels-awards flex__center">
              <div className ="app__laurels-awards_img">
                <img src={award.imgUrl} alt={"img0"+index} />
              </div>
              <div className="app__laurels-awards_details">
                <p className="p__cormorant" style={{color:"#DCCA87"}}>{award.title}</p>
                <p className="p__opensans" style={{color:"#AAA"}}>{award.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.laurels}  alt="laurelsImg" />
      </div>
    </div>
  )
}

export default Laurels