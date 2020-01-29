import React from "react";
import Moment from 'react-moment';

import "./Comments.scss";

const Comments = (props) => {

    const findUserName = (id) => {
        return props.users.map(entry => {
            if (entry._id === id) return `${entry.firstName} ${entry.lastName}`
        });
    };

    const findUserPic = (id) => {
        let displayPic;
        props.users.map(entry => {
            if(entry._id === id) {
                displayPic = entry.displayPicture;
            }
        });
        return displayPic;
    }

    return (
        props.commentsData.map(comment => (
            <div className="comments_list" key={comment._id}>
                <div className="comment_content">
                    <div className="coment_content_top">
                        <a href={`/u/${comment.userId}`}><div className="author_picture" style={{ backgroundImage: `url("${findUserPic(comment.userId)}")`, height: '40px' }}></div></a>
                        <div><a href={`/u/${comment.userId}`}>{findUserName(comment.userId)}</a> <br /> <Moment date={comment.createdAt} format="YYYY/MM/DD" /></div>
                    </div>
                    <p>{comment.content}</p>
                </div>
            </div>
        ))
    )
};

export default Comments;



