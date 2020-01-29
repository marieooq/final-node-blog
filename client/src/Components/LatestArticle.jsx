import React from "react";
import Moment from 'react-moment';

const LatestArticle = (props) => {

    const findUserName = (id) => {
        let userName;
        props.user.map(entry => {
            if(entry._id === id) {
                userName = entry.firstName +" "+ entry.lastName;
            }
        });
        return userName;
    }

    const findUserPic = (id) => {
        let displayPic;
        props.user.map(entry => {
            if(entry._id === id) {
                displayPic = entry.displayPicture;
            }
        });
        return displayPic;
    }

    const createMarkup = (content) =>{
        let body;
        if (content.length >= 110) {
            body =  content.slice(0, 300) + "...";
        }
        else{
            body = content;
        }
        return {__html: `<p>${body}</p>`};
    }

    return (
        props.data.map(entry => (
            <div className="latest_article" key={entry._id}>
                <div className="child"><a href={`/article/${entry._id}`}><div className="latest_article_image" style={{ backgroundImage: `url("${entry.featuredImage}")`, height: '280px' }}></div></a></div>
                <div className="latest_article_content">
                    <div className="latest_article_content_top">
                        
                        <a href={`/u/${entry.userId}`}><div className="author_picture" style={{ backgroundImage: `url("${findUserPic(entry.userId)}")`, height: '40px' }}></div></a>
                        <div><a href={`/u/${entry.userId}`}>{findUserName(entry.userId)}</a> <br /> <Moment date={entry.createdAt} format="YYYY/MM/DD" /></div>
                    </div>
                    <h3><a href={`/article/${entry._id}`}>{entry.title}</a></h3>
                    <div dangerouslySetInnerHTML={createMarkup(entry.content)}></div>
                </div>
            </div>
        ))
    )
}

export default LatestArticle;