import React from "react";
import './Hemisphere.css';
import Southern from './image/southern.jpg'
import Northern from './image/northern.jpg'

const hemisphereConfig = {
    Northern: {
        text: 'it is northern hemisphere',
        pic: Northern
    },
    Southern: {
        text: 'it is southern hemisphere',
        pic: Southern
    }
}

const HemisphereDisplay = ({ latitude }) => {
    const hem = latitude > 0 ? "Northern" : "Southern"
    return (
        <div className={hem}>
            <div className="ui raised text container segment">
                <div className="image">
                    <img src={hemisphereConfig[hem].pic} alt="" />
                </div>
                <div className="ui teal bottom attached label">
                    Hey you are in {hemisphereConfig[hem].text} hemisphere!
                </div>
            </div>


        </div>
    )
}

export default HemisphereDisplay;