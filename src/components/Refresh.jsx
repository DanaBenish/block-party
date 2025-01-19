import React from "react";
import "./Refresh.css";

function Refresh(){
    const handleRefresh = () => {
        window.location.reload();
    };

    return(
        <button className = "buttonR" onClick={handleRefresh}>
            Refresh
        </button>
    )
}

export default Refresh;