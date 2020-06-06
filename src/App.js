import React, {Component} from 'react';
import "../node_modules/bulma/bulma.sass";
import "./assets/scss/styles.scss";
import {toHTML} from 'discord-markdown';
import Html from "./components/html.component";
import Formatted from "./components/formatted.component";
import Textarea from "./components/textarea.component";
import './assets/js/spoiler'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }

  setText(text) {
    this.setState({text: toHTML(text)})
  }


  render() {
    return (
        <div className="app">
          <div className="container">
            <h1>Discord Markdown Playground</h1>
            <h2><a href="https://github.com/brussell98/discord-markdown">discord-markdown</a> by <a href="https://github.com/brussell98">brussell98</a></h2>

            <div className="columns">
              <div className="column">
                <h1>The text</h1>
                <Textarea handleChange={(event) => this.setText(event.target.value)}/>
              </div>

              <div className="column">
                <h1>Result</h1>
                <Formatted text={this.state.text}/>
              </div>

              <div className="column">
                <h1>The HTML</h1>
                <Html text={this.state.text}/>
              </div>
            </div>

          </div>

          <div className="app-footer">
            <p>Hosted by Vottus. <a href="https://github.com/VottusCode/dc-markdown-playground">Source Code</a></p>
            <p>Disclaimer: Additional CSS may be required for some formatting.</p>
          </div>
        </div>
    );
  }
}

export default App;
