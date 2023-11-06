import React, { useState, useCallback } from 'react'
import { auth, database } from "../Firebase/Config";
import {useHistory} from 'react-router-dom';

const SignUp = () => {

    const history = useHistory();

    const [NewUser, setDetail] = useState({
        userName: "",
        emailId: "",
        passWord: "",
        phoneNumber: "",
    })

    const [isSubmit, setProcess] = useState(false)

    function getData(event) {
        let data = event.target.name
        let value = event.target.value

        setDetail({ ...NewUser, [data]: value })
    }

    function Submit(event) {
        event.preventDefault();
        setProcess(true)
        auth.createUserWithEmailAndPassword(NewUser.emailId, NewUser.passWord)
            .then((userCredential) => {
                var user = userCredential.user;
                console.log(auth.currentUser.uid);

                database.ref('Users/' + auth.currentUser.uid).set({
                    userName: NewUser.userName,
                    emailId: NewUser.emailId,
                    passWord: NewUser.passWord,
                    phoneNumber: NewUser.phoneNumber,
                    userId: auth.currentUser.uid,
                    accountStatus: 0,
                    validStatus: "0"
                }).then(() => {
                    console.log("Account is created")
                    setProcess(false)
                    history.push('/')
                });

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorMessage);
                console.log(errorCode);
                // ..
                setProcess(false)
                document.getElementsByTagName('p')[0].innerText = errorMessage
            });
    }

    return (
        <>
            <nav style={{ "--bs-breadcrumb-divider": "url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;)" }}
                aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#" style={{ color: "white; font-weight: 600" }}>Home</a></li>
                    <li className="breadcrumb-item active text-light" aria-current="page">Library</li>
                </ol>
            </nav>

            <div className="container d-flex justify-content-center align-items-center text-center"
                style={{ height: "calc(100vh - 40px)" }}>
                <main className="form-signin wth-cont">
                    <form onSubmit={Submit}>
                        <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
                            alt="" style={{ width: "250px", marginBottom: "25px" }} />
                        <h1 className="h3 fw-normal text-light" style={{ marginBottom: "35px" }}>Sign Up</h1>

                        <div className="form-floating my-3">
                            <input type="text" className="form-control" id="floatingInput1" name='userName' value={NewUser.userName} onChange={getData} placeholder="name@example.com" required />
                            <label htmlFor="floatingInput">User Name</label>
                        </div>
                        <div className="form-floating my-3">
                            <input type="email" className="form-control" id="floatingInput2" name='emailId' value={NewUser.emailId} onChange={getData} placeholder="name@example.com" required />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating my-3">
                            <input type="password" className="form-control" id="floatingPassword" name='passWord' value={NewUser.passWord} onChange={getData} placeholder="Password" required />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="form-floating my-3">
                            <input type="text" className="form-control" id="floatingInput3" name='phoneNumber' value={NewUser.phoneNumber} onChange={getData} placeholder="Password" required />
                            <label htmlFor="floatingPassword">Phone Number</label>
                        </div>
                        <p className="text-danger"></p>

                        <div className="b">

                            {isSubmit ?
                                <button className="w-100 btn btn-lg btn-primary " type="button" disabled="">
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    Loading...
                                </button>
                                :
                                <button className="w-100 btn btn-lg btn-primary " type="submit">Sign Up</button>
                            }

                        </div>

                        <p className="mt-5 mb-3 text-light ">© 2017–2023</p>
                    </form>
                </main>
            </div>
        </>
    )
}

export default SignUp
