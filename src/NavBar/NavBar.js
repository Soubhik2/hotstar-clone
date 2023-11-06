import React, { useEffect, useState } from 'react'
// import '../myindex.css'
import KIDS from "../Kids.png";
import Modal from './Modal';
import { Link } from "react-router-dom";
import { database, auth } from "../Firebase/Config";

const NavBar = (props) => {

    const [isLogin, setLogin] = useState(true)
    const [userDetail, setUserDetail] = useState({
        name: "",
        email: "",
        plane: ""
    })

    let profileJSX = (
        <div className="dropdown">
            <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor"
                    className="bi bi-person-circle " viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fillRule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>
            </button>

            <ul className="dropdown-menu gap-1 p-2 rounded-3 mx-0 border-0 shadow w-220px" style={{ transform: "translate(-105px, 0)" }} data-bs-theme="dark">
                <li>
                    <a className="dropdown-item d-flex gap-2 align-items-center rounded-2" data-bs-toggle="modal" data-bs-target="#modalTour" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>
                        Profile
                    </a>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                    <a className="dropdown-item d-flex gap-2 align-items-center rounded-2" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-list" viewBox="0 0 16 16">
                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                            <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                        </svg>
                        WatchList
                    </a>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                    <a className="dropdown-item d-flex gap-2 align-items-center rounded-2" data-bs-toggle="modal" data-bs-target="#modalChoice" href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                            <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                        </svg>
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    )

    let LoginJSX = (
        <button className="btn btn-primary text-uppercase" data-bs-toggle="modal" data-bs-target="#modalSignin" style={{
                                    padding: "0px 16px",
                                    fontSize: "15px",
                                    height: "25px",
                                    marginRight: "10px"}} type="button">Login</button>
    )

    function authChanged(){
        auth.onAuthStateChanged((user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                var uid = user.uid;
                // ...
                setLogin(true)
                
                database.ref('Users/' + uid).once("value", function(snapshot) {
                    setUserDetail({
                        name: snapshot.val().userName,
                        email: snapshot.val().emailId,
                        plane: snapshot.val().accountStatus
                    })
                });
    
            } else {
                // User is signed out
                // ...
                setLogin(false)
                console.log("NO acc");
            }
        });
    }

    useEffect(()=>{
        authChanged()
      },[])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark nav-sty">
                <div className="container-fluid nav-item-gap">
                    <div className="dropdown" style={{ marginRight: "6px" }}>
                        <a className="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list"
                                viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </a>

                        <ul className="dropdown-menu gap-1 p-2 rounded-3 mx-0 border-0 shadow w-220px" data-bs-theme="dark">
                            <li>
                                <a className="dropdown-item d-flex gap-2 align-items-center rounded-2" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    Channel
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item d-flex gap-2 align-items-center rounded-2" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-newspaper"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                                        <path
                                            d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
                                    </svg>
                                    News
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item d-flex gap-2 align-items-center rounded-2" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-controller" viewBox="0 0 16 16">
                                        <path
                                            d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z" />
                                        <path
                                            d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
                                    </svg>
                                    Sports
                                </a>
                            </li>

                        </ul>

                    </div>
                    <a className="navbar-brand" href="#"><img style={{ width: "158px", transform: "translate(0, -6px)" }}
                        src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
                        alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-text">

                            <li className="nav-item dropdown nav-TV-gap">
                                <Link className={"nav-link " + props.TV} to="/" role="button"
                                    aria-expanded="false">
                                    TV
                                </Link>
                                <ul className="dropdown-menu gap-1 p-2 rounded-3 mx-0 border-0 shadow w-220px" data-bs-theme="dark">
                                    <li><a className="dropdown-item rounded-2" href="https://getbootstrap.com/docs/5.3/components/dropdowns/">Star
                                        Jalsa</a>
                                    </li>
                                    <li><a className="dropdown-item rounded-2" href="#">Star pluse</a></li>
                                    <li><a className="dropdown-item rounded-2" href="#">Marvel</a></li>
                                    <li><a className="dropdown-item rounded-2" href="#">Star Sports</a></li>
                                    <li><a className="dropdown-item rounded-2" href="#">Disney</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className={"nav-link " + props.Movies} to="/movies" role="button"
                                    aria-expanded="false">
                                    Movies
                                </Link>
                                <ul className="dropdown-menu gap-1 p-2 rounded-3 mx-0 border-0 shadow w-220px" data-bs-theme="dark">
                                    <li><a className="dropdown-item rounded-2" href="https://getbootstrap.com/docs/5.3/components/dropdowns/">Star
                                        Jalsa</a>
                                    </li>
                                    <li><a className="dropdown-item rounded-2" href="#">Star pluse</a></li>
                                    <li><a className="dropdown-item rounded-2" href="#">Marvel</a></li>
                                    <li><a className="dropdown-item rounded-2" href="#">Star Sports</a></li>
                                    <li><a className="dropdown-item rounded-2" href="#">Disney</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className={"nav-link " + props.Sports} to="/sports" role="button"
                                    aria-expanded="false">
                                    Sports
                                </Link>
                                <ul className="dropdown-menu gap-1 p-2 rounded-3 mx-0 border-0 shadow w-220px" data-bs-theme="dark">
                                    <li><a className="dropdown-item rounded-2" href="https://getbootstrap.com/docs/5.3/components/dropdowns/">Star
                                        Jalsa</a>
                                    </li>
                                    <li><a className="dropdown-item rounded-2" href="#">Star pluse</a></li>
                                    <li><a className="dropdown-item rounded-2" href="#">Marvel</a></li>
                                    <li><a className="dropdown-item rounded-2" href="#">Star Sports</a></li>
                                    <li><a className="dropdown-item rounded-2" href="#">Disney</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className={"nav-link " + props.Disney} aria-current="page" to="/disney">Disney+</Link>
                            </li>
                            <li className="nav-item" style={{ display: "flex", alignItems: "center" }}>
                                <Link className={"nav-link " + props.Kids} aria-current="page" style={{ padding: "0", display: "flex" }} to="/kids">
                                    <img src={KIDS} style={{ width: "46px" }} alt="logo" />
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="input-fild" type="search" placeholder="Search" aria-label="Search" />
                            <div className="search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{ color: "gray" }}
                                    className="bi bi-search" viewBox="0 0 16 16">
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </div>

                            <div className="plan-container d-flex align-items-center">
                                <button className="btn btn-outline-primary text-uppercase" style={{
                                    padding: "0px 16px",
                                    fontSize: "15px",
                                    height: "25px",
                                    marginRight: "10px"
                                }} type="submit">update</button>
                            </div>


                            <div className="profile">



                                {/*   */}

                                {isLogin ? profileJSX : LoginJSX}

                            </div>
                        </form>
                    </div>
                </div>
            </nav>

            {/* assign modal */}
            <Modal UserDetail={userDetail} />
        </>
    )
}

export default NavBar
