import React from "react";
import a1 from './image/a.jpg';

const SingleComment = () => {
    return (
        <div className="comment">
            <a className="avatar">
                <img src={a1} />
            </a>
            <div className="content">
                <a className="author">Matt</a>
                <div className="metadata">
                    <span className="date">Today at 5:42PM</span>
                </div>
                <div className="text">
                    How artistic!
                </div>
                <div className="actions">
                    <a className="reply">Reply</a>
                </div>
            </div>
        </div>
    )

}

export default SingleComment;
