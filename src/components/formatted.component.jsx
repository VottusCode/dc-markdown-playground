import React from "react"

function Formatted(props) {
    return (
        <p dangerouslySetInnerHTML={{__html: props.text}}/>
    )
}

export default Formatted