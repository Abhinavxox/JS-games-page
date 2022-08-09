import React from "react";

const HemisphereDisplay = ({ latitude }) => {
    const hem = latitude > 0 ? "Northern" : "Southern"
    return (
        <div>
            Hey you are in {hem} hemisphere!
        </div>
    )
}

export default HemisphereDisplay;