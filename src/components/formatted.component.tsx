import React from "react"

// function Formatted(props) {
//     return (
//         <p dangerouslySetInnerHTML={{__html: props.text}}/>
//     )
// }

type FormattedProps = {
  text: string
}

const Formatted: React.FC<FormattedProps> = (props) => (
  <code
    className="result"
    dangerouslySetInnerHTML={{ __html: props.text }}
  ></code>
)

export default Formatted
