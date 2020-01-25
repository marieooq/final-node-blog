import React, { useState, useEffect } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import { api } from "../api";
import "./HomePage.scss";

import FeatureArticle from "./FeatureArticle";
import LatestArticle from "./LatestArticle";

const HomePage = () => {
  const [articleData, setArticleData] = useState([]);

  useEffect(async () => {
    const articles = await api.get("/");
    // console.log("articles: ", articles);
    setArticleData(articles.data.articles);
  }, []);

  // console.log(articleData.data);
  return (
    <div className="home_main">
      <div className="home_header"></div>
      <div className="home_section">
        <Header />
        <div className="home_main_wrapper">
          <div className="home_article_wrapper">
            <Navigation />
            <div className="featured_articles">
              <FeatureArticle data={articleData} />
              {/* {featured_articles} */}
            </div>
            <div className="latest_articles">
              <LatestArticle data={articleData} />
            </div>
          </div>
        </div>
        <footer>&copy; Copyright 2020. Team C</footer>
      </div>
    </div>
  );
};

export default HomePage;
