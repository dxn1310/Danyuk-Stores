import React from 'react'
import Cards from "../itemListComponents/Cards"

export default function AccordianMenu({type,Data}) {
    console.log(type)
    console.log(Data.type)
  return (
    <div>
      {
        Data[type]?.map((key,index)=>(
            <Cards itemName={key.name} itemData={key.data} itemPic={key.pic}/>
        ))
      }
    </div>
  )
}
