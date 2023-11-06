import React from 'react'
import Items from './Items'

const RecommendedItems = (props) => {

  return (
    <div className="recommended-item-container">
    <h3>{props.Title}</h3>
    <div className="items">

      {props.ListItem.map((items, index)=>{
        return <Items Title={items.Title} SubTitle={items.SubTitle} Link={items.Link} key={index} />
      })}

    </div>
  </div>
  )
}

export default RecommendedItems
