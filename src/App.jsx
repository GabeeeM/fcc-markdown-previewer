import { useState } from "react";
import { marked } from "marked";
import './App.css';

marked.setOptions({
  breaks: true,
})

const renderer = new marked.Renderer();

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;


function App() {
  const [markdown, setMarkdown] = useState(placeholder);

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Markdown App</h1>
        <div className="display">
          <div className="input">
            <textarea value={markdown} id="editor" onChange={(e) => setMarkdown(e.target.value)}/>
          </div>
          <div id="preview" className="output" dangerouslySetInnerHTML={{__html: marked(markdown, { renderer: renderer})}} />
        </div>
      </header>
    </div>
  );
}

export default App;
