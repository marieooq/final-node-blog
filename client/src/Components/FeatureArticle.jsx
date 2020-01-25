import React from "react";
import Moment from 'react-moment';

const FeatureArticle = (props) => {
    return(
        props.data.slice(0, 4).map(entry => (
            <div className="featured_article" key={entry.title}>
                <div className="child"><a href={`/article/${entry._id}`}><div className="featured_image" style={{ backgroundImage: `url("${entry.featuredImage}")`, height: '247px' }}></div></a></div>
                <div className="featured_content">
                    <h3><a href={`/article/${entry._id}`}>{entry.title}</a></h3>
                    <div className="content_bottom">
                        <a href={`/u/${entry.author}`}><div className="author_picture"><img src="" /></div></a>
                        <div><a href={`/u/${entry.author}`}>{entry.author}</a> <br /> <Moment date={entry.createdAt} format="YYYY/MM/DD" /></div>
                    </div>
                </div>
            </div>
        ))
    )
}

export default FeatureArticle;