import React from "react";

function Textarea(props) {
    return (
        <div>
            <textarea className="textarea" onChange={props.handleChange}/>
        </div>
    )
}

export default Textarea