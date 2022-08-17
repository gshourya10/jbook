import "bulmaswatch/superhero/bulmaswatch.min.css";
import ReactDOM from "react-dom";
import React, { useState } from "react";
import CodeEditor from "./components/code-editor";
import Preview from "./components/preview";
import bundle from "./bundler";

const App = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const submitHandler = async (event: any) => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <>
      <CodeEditor
        initialValue="const a = 1;"
        onChange={(value) => setInput(value)}
      />
      <div>
        <button onClick={submitHandler}>Submit</button>
      </div>
      <Preview code={code} />
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
