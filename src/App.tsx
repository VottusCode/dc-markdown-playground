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
        <div className="page-content">
          <div className="content has-text-centered mt-4 mb-4">
            <h1>Discord Markdown Playground</h1>
            <h5>
              <a href="https://github.com/brussell98/discord-markdown">
                discord-markdown
              </a>{" "}
              by <a href="https://github.com/brussell98">brussell98</a>
            </h5>
          </div>

          <div className="columns demo">
            <div className="column is-one-third">
              <h5 className="is-size-5">Markdown</h5>
              <Textarea handleChange={setTextValue} />
            </div>

            <div className="column is-one-third">
              <h5 className="is-size-5">Result</h5>
              <div className="c-content">
                <Formatted text={text} />
              </div>
            </div>

            <div className="column is-one-third">
              <h5 className="is-size-5">HTML</h5>
              <div className="c-content">
                <Html text={text} />
              </div>
            </div>
          </div>

          {spoilers && (
            <div className="has-text-centered">
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
      </div>

      <footer className="footer has-text-centered">
        <p>
          2020 &copy; Vottus &ndash; Licensed under MIT &ndash;{" "}
          <a href="https://github.com/VottusCode/dc-markdown-playground">
            GitHub
          </a>
        </p>
        <p>
          Disclaimer: Additional CSS / JS may be required for some formatting
          and functionality
        </p>
      </footer>
    </div>
  )
}

export default App
