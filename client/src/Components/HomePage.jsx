import React, { useState, useEffect } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import LatestArticle from './LatestArticle';
import Footer from './Footer';
import { api } from '../api';
import './HomePage.scss';

const HomePage = () => {
  const [articleData, setArticleData] = useState([]);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const articles = await api.get('/');
      setArticleData(articles.data.articles);
    }
    fetchArticles();

    async function fetchUsers() {
      const users = await api.get('/users');
      setUsersData(users.data.users);
    }

    fetchUsers();
  }, []);

  return (
    <div className="home_main">
      <div className="home_header">
        <div className="home_header_inner">
          <a href="/" id="logo">
            ART BOARD
          </a>
        </div>
      </div>
      <div className="home_section">
        <Header />
        <div className="home_main_wrapper">
          <div className="home_article_wrapper">
            <Navigation />
            <div className="latest_articles">
              <LatestArticle data={articleData} user={usersData} />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
