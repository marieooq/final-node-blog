import React, { useState, useEffect } from "react";
import "./Article.scss";
import { api } from "../api";
import Moment from 'react-moment';

import Header from "./Header";
import Navigation from "./Navigation";

const Article = ({ match }) => {
    console.log(match.params.id);
    const [response, setResponse] = useState();
    const [articleData, setArticleData] = useState([]);
    const [usersData, setUsersData] = useState([]);

    useEffect(async () => {
        const article = await api.get("/"+match.params.id);
        // console.log("User's articles: ", article);
        setArticleData(article.data.article);

        const users = await api.get("/users");
        // console.log("users: ", users.data.users);
        setUsersData(users.data.users);
    }, []);

    const findUserName = (id) => {
        let userName;
        usersData.map(entry => {
            if(entry._id === id) userName = entry.firstName +" "+entry.lastName;
        });
        return userName;
    }

    const responseForm = async event => {
        console.log("clicked");
        event.preventDefault();
        if (response !== undefined && response !== "") {
            const user = await api.post("/comment", {
                comment: response
            });
            // localStorage.setItem("user", user.data.user._id);

            setResponse("");
        }
    };

    const articleHeaderStyle = {
        height: '50vh',
        backgroundImage: `url("${articleData.featuredImage}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        verticalAlign: 'top',
        backgroundPosition: 'center center',
        transformOrigin: 'center top',
        transform: 'translateZ(-#{0.5 * 2}px) scale(1 + 0.5 * 2)'
    }

    const handleResponseChange = value => {
        setResponse(value);
    };

    return (
        <>
            <div className="article_main">
                <div className="article_header" style={articleHeaderStyle}></div>
                <div className="article_section">
                    <Header />
                    <div className="article_main_wrapper">

                        <div className="article_wrapper">
                            <Navigation />
                            <h1 className="article_title">{articleData.title}</h1>
                            <div className="author">
                                <a href={`/u/${articleData.userId}`}><div className="author_picture"><img src="" /></div></a>
                                <div className="author_name"><a href={`/u/${articleData.userId}`}>{findUserName(articleData.userId)}</a> - <Moment date={articleData.createdAt} format="YYYY/MM/DD" /></div>

                                <div className="article_cat">{articleData.category}</div>
                            </div>

                            <div className="article_content">
                                <p>{articleData.content}</p>
                            </div>

                            <div className="article_likes">
                                <h3><i className="far fa-heart"></i> -Like goes here-</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="article_response">
                <div className="wrapper">
                    Write a comment<br />
                    <form onSubmit={responseForm}>
                        <div className="group">
                            <input
                                type="hidden"
                            />
                            <br />
                            <input
                                type="text"
                                placeholder="Enter your Response"
                                onChange={e => handleResponseChange(e.target.value)}
                                required
                            />
                        </div>
                        <input type="submit" className="btn" value="Submit" />
                    </form>

                    Comments<br />
                    <hr />
                </div>
                <footer>&copy; Copyright 2020. Team C</footer>

            </div>
        </>
    );
};

export default Article;