import React from 'react'

const Items = (props) => {
    return (
        <div className="item-box">
            <a href=""><img
                src={props.src}
                alt="" /></a>
        </div>
    )
}

export default Items
