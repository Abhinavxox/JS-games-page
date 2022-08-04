import React from "react";

const SingleComment = (props) => {
    return (
        <div className="comment">
            <a className="avatar">
                <img src={props.image} />
            </a>
            <div className="content">
                <a className="author">{props.name}</a>
                <div className="metadata">
                    <span className="date">{props.date}</span>
                </div>
                <div className="text">
                    {props.text}
                </div>
                <div className="actions">
                    <a className="reply">Reply</a>
                </div>
            </div>
        </div>
    )

}

export default SingleComment;
