import React from "react";

function Textarea(props) {
    return (
        <textarea className="textarea" onChange={props.handleChange}/>
    )
}

export default Textarea