import React from "react";

const ImageList = (props) => {
    const imagess = props.images;
    return (
        <div className="ui segment">
            <div className="ui relaxed divided list">
                {imagess.map(image => {
                    return (
                        <div key={image.id} className="item">
                            <div className="ui tiny image">
                                <img src={image.webformatURL} alt={image.tags} />
                            </div>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default ImageList