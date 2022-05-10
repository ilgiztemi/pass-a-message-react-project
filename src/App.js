import { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputText: "",
      message: ""
    };
  }
  handleInput = (e) => {
    this.setState({ inputText: e.target.value });
  };
  onSubmit = (event) => {
    event.preventDefault();
    const { inputText, message } = this.state;
    this.setState({ message: this.state.inputText });
    this.setState({ inputText: "" });
  };
  render() {
    return (
      <div className="container">
        <h2>A Message You Would Like To Pass</h2>
        <div>
          <form id="form">
            <input
              onChange={this.handleInput}
              value={this.state.inputText}
              type="text"
              className="input"
            />
            <br />
            <button className="submit" onClick={this.onSubmit}>
              Submit
            </button>
          </form>
          <div className="error">Please Enter A Value To Pass</div>
          <h2>Last Message Delivered</h2>
          <div className="output">{this.state.message}</div>
        </div>
      </div>
    );
  }
}

export default App;
