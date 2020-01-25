import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import "./HomePage.scss";

const articles = [{
  _id: 1,
  title: "アーティストの働き方も、ブロックチェーンで変わる。その未来を作るスタートアップ",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestiae eaque reprehenderit ea itaque adipisci architecto deserunt neque incidunt blanditiis, quis at. Qui a explicabo eos fuga, obcaecati corporis delectus?",
  author: "Marie",
  published_date: "Jan 22 2020",
  image: "https://images.unsplash.com/photo-1496220391152-d61e60752f78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2400&q=80"
},{
  _id: 2,
  title: "アーティストの働き方も、ブロックチェーンで変わる。その未来を作るスタートアップ",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestiae eaque reprehenderit ea itaque adipisci architecto deserunt neque incidunt blanditiis, quis at. Qui a explicabo eos fuga, obcaecati corporis delectus?",
  author: "Marie",
  published_date: "Jan 22 2020",
  image: "https://images.unsplash.com/photo-1518145312389-36e7f6e06034?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80"
},{
  _id: 3,
  title: "アーティストの働き方も、ブロックチェーンで変わる。その未来を作るスタートアップ",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestiae eaque reprehenderit ea itaque adipisci architecto deserunt neque incidunt blanditiis, quis at. Qui a explicabo eos fuga, obcaecati corporis delectus?",
  author: "Marie",
  published_date: "Jan 22 2020",
  image: "https://images.unsplash.com/photo-1518518808036-5e6c4e5fbef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2400&q=80"
},{
  _id: 4,
  title: "アーティストの働き方も、ブロックチェーンで変わる。その未来を作るスタートアップ",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestiae eaque reprehenderit ea itaque adipisci architecto deserunt neque incidunt blanditiis, quis at. Qui a explicabo eos fuga, obcaecati corporis delectus?",
  author: "Marie",
  published_date: "Jan 22 2020",
  image: "https://images.unsplash.com/photo-1520312501384-dbdb83a1cb11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2400&q=80"
}];

const featured_articles = articles.map(entry => (
  <div className="featured_article" key={entry.title}>
    <div className="child"><a href={`/article/${entry._id}`}><div className="featured_image" style={{backgroundImage : `url("${entry.image}")`, height: '247px' }}></div></a></div>
    <div className="featured_content">
      <h3><a href={`/article/${entry._id}`}>{entry.title}</a></h3>
      <div className="content_bottom">
        <a href={`/u/${entry.author}`}><div className="author_picture"><img src="" /></div></a>
        <div><a href={`/u/${entry.author}`}>{entry.author}</a> <br/> {entry.published_date}</div>
      </div>
    </div>
  </div>
));

const latest_articles = articles.map(entry => (
  <div className="latest_article" key={entry.title}>
    <div className="child"><a href={`/article/${entry._id}`}><div className="latest_article_image" style={{backgroundImage : `url("${entry.image}")`, height: '280px' }}></div></a></div>
    <div className="latest_article_content">
      <div className="latest_article_content_top">
        <a href={`/u/${entry.author}`}><div className="author_picture"><img src="" /></div></a>
        <div><a href={`/u/${entry.author}`}>{entry.author}</a> <br/> {entry.published_date}</div>
      </div>
      <h3><a href={`/article/${entry._id}`}>{entry.title}</a></h3>
      <p>{entry.content}</p>
    </div>
  </div>
));

const HomePage = () => {
  return (
    <div className="home_main">
      <div className="home_header">
      </div>
      <div className="home_section">
        <Header />
        <div className="home_main_wrapper">
          
          <div className="home_article_wrapper">
            <Navigation />
            <div className="featured_articles">
              {featured_articles}
            </div>
            <div className="latest_articles">
              {latest_articles}
            </div>
          </div>
        </div>
        <footer>&copy; Copyright 2020. Team C</footer>
      </div>
    </div>
  );
}

export default HomePage;
