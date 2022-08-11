import React from "react";
import Southern from './image/southern.jpg'
import Northern from './image/northern.jpg'

const HemisphereDisplay = ({ latitude }) => {
    const hem = latitude > 0 ? "Northern" : "Southern"
    const pic = latitude > 0 ? Northern : Southern
    return (
        <div>
            <img src={pic} alt="" />
            Hey you are in {hem} hemisphere!
        </div>
    )
}

export default HemisphereDisplay;