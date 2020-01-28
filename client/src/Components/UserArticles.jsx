import React from "react";
import Moment from 'react-moment';

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

const UserArticles = (props) => {

    return (
        props.data.map(entry => (
            <div className="user_article" key={entry.title}>
                <div className="child"><a href={`/article/${entry._id}`}><div className="user_article_image" style={{ backgroundImage: `url("${entry.featuredImage}")`, height: '280px' }}></div></a></div>
                <div className="user_article_content">
                    <div className="user_article_content_top">
                        <Moment date={entry.createdAt} format="YYYY/MM/DD" />
                    </div>
                    <h3><a href={`/article/${entry._id}`}>{entry.title}</a></h3>
                    <div dangerouslySetInnerHTML={createMarkup(entry.content)}></div>
                </div>
            </div>
        ))
    )

}

export default UserArticles;