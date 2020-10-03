import React from "react"

type TextareaProps = {
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => any
}

const Textarea: React.FC<TextareaProps> = (props) => (
  <textarea className="textarea" onChange={props.handleChange} />
)

export default Textarea
