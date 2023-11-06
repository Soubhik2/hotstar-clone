import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { auth, database } from "../Firebase/Config";

const Modal = (props) => {

    function SignOut() {
        auth.signOut().then(() => {
            // Sign-out successful.
            console.log('Sign-out successful.');
            // console.log('Uid 3' + firebase.auth().currentUser.uid);
        }).catch((error) => {
            // An error happened.
            console.log(error.message);
        });
    }

    const [isLoginProcess, setProcess] = useState(false)

    function Login() {
        if (user.email != "") {
            if (user.password != "") {
                setProcess(true)

                auth.signInWithEmailAndPassword(user.email, user.password)
                    .then((userCredential) => {
                        // Signed in 
                        var user = userCredential.user;
                        console.log(auth.currentUser.uid);
                        // ...
                        setProcess(false)
                        document.getElementById("close").click()
                    })
                    .catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;

                        console.log(errorMessage);
                        console.log(errorCode);
                        // ..
                        document.getElementsByTagName('p')[3].innerText = error.message
                        setProcess(false)
                    });

            } else {
                document.getElementsByTagName('p')[2].innerText = "Password field is empty"
            }
        } else {
            document.getElementsByTagName('p')[1].innerText = "Email field is empty"
        }
    }

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const getUserData = (event) => {
        let data = event.target.name
        let value = event.target.value

        setUser({ ...user, [data]: value })
    }

    function planeChack(){
        if (props.UserDetail.plane == 0) {
            return <>No Subscription is available</>
        } else if(props.UserDetail.plane == 1) {
            return <>Subscribed</>
        } else if (props.UserDetail.plane == 2) {
            return <>Subscribed pluse</>
        }
    }

    // console.log(props.UserDetail.name)

    return (
        <>
            {/*  modal for logout */}
            <div className="modal fade modal-sheet p-4 py-md-5" tabIndex="-1" role="dialog" id="modalChoice">
                <div className="modal-dialog" role="document">
                    <div className="modal-content rounded-3 shadow modal-mymodal">
                        <div className="modal-body p-4 text-center">
                            <h5 className="mb-0">Logout</h5>
                            <p className="mb-0">Are you want to Logout</p>
                        </div>
                        <div className="modal-footer flex-nowrap p-0">
                            <button type="button" className="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 border-end" data-bs-dismiss="modal" onClick={SignOut}><strong>Yes</strong></button>
                            <button type="button" className="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0" data-bs-dismiss="modal">Cancle</button>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Modal for profile in */}
            <div className="modal modal-sheet fade p-4 py-md-5" tabIndex="-1" role="dialog" id="modalTour">
                <div className="modal-dialog" role="document">
                    <div className="modal-content rounded-4 shadow modal-mymodal">
                        <div className="modal-body p-5">
                            <h2 className="fw-bold mb-0">My Profile</h2>

                            <ul className="d-grid gap-4 my-5 list-unstyled small">
                                <li className="d-flex gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    </svg>
                                    <div>
                                        <h5 className="mb-0">Name</h5>
                                        {props.UserDetail.name}
                                    </div>
                                </li>
                                <li className="d-flex gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                    </svg>
                                    <div>
                                        <h5 className="mb-0">Eamil</h5>
                                        {props.UserDetail.email}
                                    </div>
                                </li>
                                <li className="d-flex gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-gift-fill" viewBox="0 0 16 16">
                                        <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7h6zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9H2.5z" />
                                    </svg>
                                    <div>
                                        <h5 className="mb-0">Plans</h5>
                                        {planeChack()}
                                    </div>
                                </li>
                            </ul>
                            <button type="button" className="btn btn-lg btn-primary mt-5 w-100" data-bs-dismiss="modal">Great, thanks!</button>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Modal for sign in */}
            <div className="modal modal-sheet fade p-4 py-md-5" tabIndex="-1" role="dialog" id="modalSignin">
                <div className="modal-dialog" role="document">
                    <div className="modal-content rounded-4 shadow modal-mymodal">
                        <div className="modal-header p-5 pb-4 border-bottom-0">
                            <h1 className="fw-bold mb-0 fs-2">Login</h1>
                            <button type="button" className="btn" id='close' data-bs-dismiss="modal" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                </svg>
                            </button>
                        </div>

                        <div className="modal-body p-5 pt-0">
                            <form className="">
                                <div className="form-floating mb-3">
                                    <input type="email" name='email' value={user.email} onChange={getUserData} className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput" style={{ color: "gray" }}>Email address</label>
                                    <p className='my-2 text-danger'></p>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" name='password' value={user.password} onChange={getUserData} className="form-control rounded-3" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword" style={{ color: "gray" }}>Password</label>
                                    <p className='my-2 text-danger'></p>
                                </div>

                                {isLoginProcess ?
                                    <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="button" disabled="">
                                        <span className="spinner-border spinner-border-sm mx-1" role="status" aria-hidden="true"></span>
                                        Loading...
                                    </button>
                                    :
                                    <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" onClick={Login} type="button">Login</button>
                                }
                                <p className='my-2 text-danger'></p>


                                <small className="text-light">By clicking Sign up, you agree to the terms of use. <p>No account  <Link to="/signup" onClick={()=>{document.getElementById("close").click()}} style={{ textDecoration: "none", color: "aqua" }}>Sign Up</Link></p></small>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
