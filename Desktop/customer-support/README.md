### `1: What is JSX, and why is it used?`
#### It is an syntax extension for Javascript, it allows to code HTML like code inside Javascript. Writting codes in JSX is way more easy and maintainable.

### `2: What is the difference between State and Props?`
#### State is an build-in-object in React, it is like keep track of live change in the UI, where Props are read-only inputs ,which are used to pass data from component to components

### `3: What is the useState hook, and how does it work?`
#### It is an React hook, which holds initial value and it allows us to add state to a function component.

### `4: How can you share state between components in React?`
#### We declare the state in component, then pass its current state and function to other components where by destructuring the props we can use them

```
import { useState } from "react";
import "./App.css";

function App() {
  const [demoState, setDemoState] = useState(true)

  return (
    <>
    <Header demoState={demoState} setDemoState={setDemoState}></Header>
    </>
  );
}

export default App;
```

### `5: How is event handling done in React?`
#### We write function then call it inside onClick={}(onClick is written in camelCase where in vanila JS we write in lowercase)
```
import React from "react";

export default function Container() {
  const showMSG = () => {
    alert("Hello");
  };

  return (
    <>
      <button onClick={showMSG}>Click</button>
    </>
  );
}
```