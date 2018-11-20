import React from "react";
import ReactDOM from "react-dom";
import Posts from "../src/components/posts";
import NewPost from "../src/components/newPost";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <NewPost />
      <Posts />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
