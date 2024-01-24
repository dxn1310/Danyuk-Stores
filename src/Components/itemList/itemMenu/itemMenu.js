import React from 'react'
import "../itemMenu/itemMenu.css"

export default function itemMenu({types,Data,category}) {
  return (
    <div className='itemmenu-outer'>
        <div className='itemmenu-box-outer'>
        {
            category.map((element,index)=>(
                <div className='itemmenu-box-inner'>{element}</div>
            ))
        }
      </div>
    </div>
  )
}
