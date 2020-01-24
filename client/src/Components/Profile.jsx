import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Profile.scss";

import Header from "./Header";
import Navigation from "./Navigation";

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

const articles = [{
    title: "アーティストの働き方も、ブロックチェーンで変わる。その未来を作るスタートアップ",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestiae eaque reprehenderit ea itaque adipisci architecto deserunt neque incidunt blanditiis, quis at. Qui a explicabo eos fuga, obcaecati corporis delectus?",
    author: "Marie",
    published_date: "Jan 22 2020",
    image: "https://images.unsplash.com/photo-1496220391152-d61e60752f78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2400&q=80"
}, {
    title: "アーティストの働き方も、ブロックチェーンで変わる。その未来を作るスタートアップ",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestiae eaque reprehenderit ea itaque adipisci architecto deserunt neque incidunt blanditiis, quis at. Qui a explicabo eos fuga, obcaecati corporis delectus?",
    author: "Marie",
    published_date: "Jan 22 2020",
    image: "https://images.unsplash.com/photo-1518145312389-36e7f6e06034?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80"
}, {
    title: "アーティストの働き方も、ブロックチェーンで変わる。その未来を作るスタートアップ",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestiae eaque reprehenderit ea itaque adipisci architecto deserunt neque incidunt blanditiis, quis at. Qui a explicabo eos fuga, obcaecati corporis delectus?",
    author: "Marie",
    published_date: "Jan 22 2020",
    image: "https://images.unsplash.com/photo-1518518808036-5e6c4e5fbef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2400&q=80"
}, {
    title: "アーティストの働き方も、ブロックチェーンで変わる。その未来を作るスタートアップ",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestiae eaque reprehenderit ea itaque adipisci architecto deserunt neque incidunt blanditiis, quis at. Qui a explicabo eos fuga, obcaecati corporis delectus?",
    author: "Marie",
    published_date: "Jan 22 2020",
    image: "https://images.unsplash.com/photo-1520312501384-dbdb83a1cb11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2400&q=80"
}];

const user_articles = articles.map(entry => (
    <div className="user_article" key={entry.title}>
        <div className="user_article_image" style={{ backgroundImage: `url("${entry.image}")`, height: '280px' }}></div>
        <div className="user_article_content">
            <div className="user_article_content_top">
                <div className="author_picture"><img src="" /></div>
                <div>{entry.author} <br /> {entry.published_date}</div>
            </div>
            <h3>{entry.title}</h3>
            <p>{entry.content}</p>
        </div>
    </div>
));

const Profile = () => {
    return (
        <div className="profile_main">
            <header style={profileHeaderStyle}>
            </header>
            <div className="profile_section">
                <Header />
                <div className="profile_main_wrapper">

                    <div className="profile_article_wrapper">
                        <Navigation />

                        <div className="create_article_section"> <FontAwesomeIcon icon="plus-circle" /> Create New Post</div>

                        <div className="profile_articles">
                            {user_articles}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;