import React, { useEffect, useState } from "react"
import "../node_modules/bulma/bulma.sass"
import "./assets/scss/styles.scss"
// @ts-ignore
import { toHTML } from "discord-markdown"
import Html from "./components/html.component"
import Formatted from "./components/formatted.component"
import Textarea from "./components/textarea.component"
// import "./assets/js/spoiler";

const App: React.FC = () => {
  const [text, setText] = useState("")
  const [spoilers, setSpoilers] = useState(false)

  const setTextValue = (val: React.ChangeEvent<HTMLTextAreaElement> | string) =>
    setText(toHTML(typeof val !== "string" ? val.target.value : val))

  useEffect(() => {
    const spoilers = document.getElementsByClassName("d-spoiler")
    const filtered = [...spoilers].filter((el) => !el.classList.contains("rc"))
    console.log(filtered)

    setSpoilers(filtered.length >= 1) // Spoiler disclaimer

    filtered.forEach((el) => {
      el.classList.add("rc")
      el.addEventListener("click", () => {
        el.classList.add("active")
      })
    })
  }, [text])

  return (
    <div className="app">
      <div className="container">
        <h1>Discord Markdown Playground</h1>
        <h2>
          <a href="https://github.com/brussell98/discord-markdown">
            discord-markdown
          </a>{" "}
          by <a href="https://github.com/brussell98">brussell98</a>
        </h2>

        <div className="columns">
          <div className="column">
            <h1>The text</h1>
            <Textarea handleChange={setTextValue} />
          </div>

          <div className="column">
            <h1>Result</h1>
            <Formatted text={text} />
          </div>

          <div className="column">
            <h1>The HTML</h1>
            <Html text={text} />
          </div>
        </div>

        {spoilers && (
          <div>
            Disclaimer: discord-markdown does not implement the Spoiler
            functionality, you have to implement it yourself.
            <br />
            For a React example, see{" "}
            <a href="https://github.com/VottusCode/dc-markdown-playground/blob/master/src/App.tsx">
              App.tsx on VottusCode/dc-markdown-playground
            </a>
          </div>
        )}
      </div>

      <div className="app-footer">
        <p>
          Hosted by Vottus.{" "}
          <a href="https://github.com/VottusCode/dc-markdown-playground">
            Source Code
          </a>
        </p>
        <p>
          Disclaimer: Additional CSS / JS may be required for some formatting
          and functionality
        </p>
      </div>
    </div>
  )
}

export default App
