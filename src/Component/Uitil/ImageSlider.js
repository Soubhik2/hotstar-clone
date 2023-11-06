import React from 'react'

const ImageSlider = (props) => {

    return (
        <div id="carouselExample" className="carousel slide" style={{ marginTop: "5px" }}>
            <div className="carousel-inner">

                {props.ListItem.map((item, index) => {
                    return (
                        <>
                            {index == 0 ?
                                <div key={index} className="carousel-item active">
                                    <img src={"https://source.unsplash.com/1600x400/?" + item} className="d-block w-100" alt="..." />
                                </div>
                                :
                                <div key={index} className="carousel-item">
                                    <img src={"https://source.unsplash.com/1600x400/?" + item} className="d-block w-100" alt="..." />
                                </div>
                            }

                        </>

                    )
                })}

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default ImageSlider
