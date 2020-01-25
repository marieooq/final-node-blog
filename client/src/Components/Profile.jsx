import React, { useEffect, useState } from "react";
import "./Profile.scss";
import { api } from "../api";

import Header from "./Header";
import Navigation from "./Navigation";
import UserArticles from "./UserArticles";

const profileHeaderStyle = {
    height: '50vh',
    background: `url("https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3889&q=80")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    verticalAlign: 'top',
    backgroundPosition: 'center center',
    transformOrigin: 'center top',
    transform: 'translateZ(-#{0.5 * 2}px) scale(1 + 0.5 * 2)'
}

const Profile = () => {
    const [articlesData, setArticlesData] = useState([]);

    useEffect(() => {
        async function fetchArticles() {
            const articles = await api.get("/");
            setArticlesData(articles.data.articles);
        }
        fetchArticles();
    }, []);

    return (
        <div className="profile_main">
            <header style={profileHeaderStyle}>
            </header>
            <div className="profile_section">
                <Header />
                <div className="profile_main_wrapper">

                    <div className="profile_article_wrapper">
                        <Navigation />

                        <div className="create_article_section">
                            <div><h3>'s Posts</h3></div>
                            <div>
                                <i className="fa fa-plus-circle"></i>
                                <a href="/post">Create New Post</a>
                            </div>
                        </div>

                        <div className="profile_articles">
                            <UserArticles data={articlesData} />
                            {/* {user_articles} */}
                        </div>

                    </div>
                </div>
                <br /><br /><br /><br /><br /><br />
                <footer>&copy; Copyright 2020. Team C</footer>
            </div>
        </div>
    );
}

export default Profile;