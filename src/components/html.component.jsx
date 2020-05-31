import React from "react"

function Html(props) {
    return (
        <pre>
            <code>
                {props.text}
            </code>
        </pre>
    );
}

export default Html