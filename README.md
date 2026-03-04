1.What is JSX, and why is it used?
Answer:JSX (JavaScript XML) is a syntactic extension for JavaScript that seems similar to HTML and is used in React to specify UI structure.It is used make simpler UI code to interpret,integrate UI and logic in one place and make the developer experience better.
2.What is the difference between State and Props?
Answer: Props meaning, data are passing from parents to child but State meaning, data are managed inside a component.Props cannot be changed but state can be changed.Props are managed by parent component whereas state are managed by itself.
3.What is the useState hook, and how does it work?
Answer:useState is a React Hook that lets functional parts build and manage state, which is also known as dynamic data.
The use of ReactHook is:const [state, setState] = useState(0);here state is used as current value and setState is used for updating the value of state and also useState contain an initial value.
4.How can you share state between components in React?
Answer: We can share state between components in React by moving the state to the nearest common parent and then send it through props and this is called Lifting State Up.
5.How is event handling done in React?
Answer:React's event handling is done via camelCase event names include onClick and giving a function reference within curly brackets.Ex: <button onClick={handleClick}>Click Me</button>
