import React from 'react'

const Items = (props) => {
    return (
        <div className="item-box-1" style={{ backgroundImage: props.Link }}>
            <div className="lay">
                <div className="item-text">
                    <h5>{props.Title}</h5>
                    <span>{props.SubTitle}</span>
                </div>
            </div>
        </div>
    )
}

export default Items
