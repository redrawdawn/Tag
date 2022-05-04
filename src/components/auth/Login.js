import React, { useRef, useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom"
import "./Login.css"

export const Login = ({setAuthUser}) => {
    const email = useRef()
    const existDialog = useRef()
    const navigate = useNavigate()

    const getExistingUser = () => {
       //console.log(email.current.value)
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(res => res.json())
            .then(users => users.length ? users[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        getExistingUser().then(user => {
                if (user) {
                    //sessionStorage.setItem("tag_user", JSON.stringify(user) );
                    setAuthUser(user)
                    navigate("/game")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>

            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Tag</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"></label>
                        <input ref={email} type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button className="sign-in-button" type="submit">
                            Sign in
                        </button>
                    </fieldset>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
                </form>
            </section>
        </main>
    )
}

