import React, { useState } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import "./Signin.scss";

const Signin = () => {

    const [userEmail, setUserEmail] = useState();
    const [userPass, setUserPass] = useState();

    const signinForm = event => {
        event.preventDefault();
        if (userEmail !== undefined && userEmail !== "") {
            //handleSubmit(userEmail,userPass);
            setUserEmail("");
            setUserPass("");
        }
    };

    const handleEmailChange = value => {
        setUserEmail(value);
    };

    const handlePasswordChange = value => {
        setUserPass(value);
    };

    return (
        <main>
            <header>
            </header>
            <section>
                <Header />
                <div className="main_wrapper">
                    <form onSubmit={signinForm}>
                        <div className="group">
                            <input
                                type="text"
                                placeholder="Enter your Email Address"
                                value={userEmail}
                                onChange={e => handleEmailChange(e.target.value)}
                            />
                            <br />
                            <input
                                type="password"
                                placeholder="Enter your Password"
                                value={userPass}
                                onChange={e => handlePasswordChange(e.target.value)}
                            />
                        </div>
                        <br/>
                        <input type="submit" className="btn" value="Submit" />
                    </form>

                </div>
            </section>
        </main>
    );
}

export default Signin;
