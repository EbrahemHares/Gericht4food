import React from 'react'
import "./subheading.css"
import images from "../../constants/images"

const SubHeading = ({title}) => {
  return (
    <div className="app__subheading" style={{marginBottom:'1rem'}}>
      <p className="p__cormorant">{title}</p>
      <img src={images.spoon} className=".spoon__img" alt="spoonImg" />
    </div>
  )
}

export default SubHeading