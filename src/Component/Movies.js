import React from 'react'
import NavBar from '../NavBar/NavBar'
import ImageSlider from './Uitil/ImageSlider'
import RecommendedItems from './Uitil/Recommended Items/RecommendedItems'

const Movies = () => {

    let ImageSliderList = [
        "Marvel, Movie, Video",
        "Disney, Movie, Video",
        "Fox, Movie, Video"
    ]

    let List = [
        {
            Title: "Movies",
            SubTitle: "New Movies is now available",
            Link: "url('https://source.unsplash.com/194x255/?moves')"
        },
        {
            Title: "Sports",
            SubTitle: "IPL is live Now [New match KKR vs MPL]",
            Link: "url('https://source.unsplash.com/194x255/?spors')"
        },
        {
            Title: "Laptop",
            SubTitle: "New Laptop offer is now available",
            Link: "url('https://source.unsplash.com/194x255/?laptop')"
        },
        {
            Title: "Mobile",
            SubTitle: "Mobile is available form 10:30PM. A new list available soon",
            Link: "url('https://source.unsplash.com/194x255/?mobile')"
        },
        {
            Title: "News",
            SubTitle: "News in Movies world vist now for free",
            Link: "url('https://source.unsplash.com/194x255/?news-world')"
        },
        {
            Title: "Marvel",
            SubTitle: "New Marvel moves and webs is now available",
            Link: "url('https://source.unsplash.com/194x255/?marvel')"
        },
        {
            Title: "Animation",
            SubTitle: "New Animation Movies is now available. Watch, Now!",
            Link: "url('https://source.unsplash.com/194x255/?animation')"
        },
        {
            Title: "Disney",
            SubTitle: "New Movies is now available",
            Link: "url('https://source.unsplash.com/194x255/?disney')"
        }
    ]

    return (
        <>
            <NavBar Movies="active"/>
            <ImageSlider ListItem={ImageSliderList} />
            <RecommendedItems Title="New Movies" ListItem={List} />
            <RecommendedItems Title="New Hindi Movies" ListItem={List} />
            <RecommendedItems Title="New bengali Movies" ListItem={List} />
            <RecommendedItems Title="New Tamil Movies" ListItem={List} />
        </>
    )
}

export default Movies
