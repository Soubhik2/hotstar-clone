import React from 'react'
import NavBar from '../NavBar/NavBar'
import ImageSlider from './Uitil/ImageSlider'
import CompaniItem from './Uitil/Companis Items/CompaniItem'
import RecommendedItems from './Uitil/Recommended Items/RecommendedItems'

const TV = () => {

    let ImageSliderList = [
        "movies",
        "spors",
        "socal-media",
        "game"
    ]

    let RecommendedList = [
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

    let DisneyList = [
        {
            Title: "Movies",
            SubTitle: "New Movies is now available",
            Link: "url('https://source.unsplash.com/194x255/?movies')"
        }
        
    ]

    let WatchList = [
        {
            Title: "WatchList 1",
            SubTitle: "New Movies is now available",
            Link: "url('https://source.unsplash.com/194x255/?movies-1')"
        },
        {
            Title: "WatchList 2",
            SubTitle: "IPL is live Now [New match KKR vs MPL]",
            Link: "url('https://source.unsplash.com/194x255/?movies-2')"
        },
        {
            Title: "WatchList 3",
            SubTitle: "New Laptop offer is now available",
            Link: "url('https://source.unsplash.com/194x255/?movies-3')"
        },
        {
            Title: " WatchList 4",
            SubTitle: "Mobile is available form 10:30PM. A new list available soon",
            Link: "url('https://source.unsplash.com/194x255/?mobile')"
        }
    ]


    return (
        <>
            <NavBar TV="active"/>
            <ImageSlider ListItem={ImageSliderList} />
            <CompaniItem />
            <RecommendedItems Title="Recommended For You" ListItem={RecommendedList} />
            <RecommendedItems Title="New To Disney+" ListItem={DisneyList} />
            <RecommendedItems Title="WatchList" ListItem={WatchList} />
        </>
    )
}

export default TV

