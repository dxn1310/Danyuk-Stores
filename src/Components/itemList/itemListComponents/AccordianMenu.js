import React from 'react'
import Cards from "../itemListComponents/Cards"
import "../itemListComponents/ac.css"

export default function AccordianMenu({type,Data}) {
    console.log(type)
    console.log(Data.type)
  return (
    <div className='am-outer'>
      {
        Data[type]?.map((key,index)=>(
            <Cards itemName={key.name} itemData={key.data} itemPic={key.pic} itemPrice={key.price}/>
        ))
      }
    </div>
  )
}
