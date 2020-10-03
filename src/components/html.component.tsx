import React from "react"

type HtmlProps = {
  text: string
}

const Html: React.FC<HtmlProps> = (props) => <code>{props.text}</code>

export default Html
