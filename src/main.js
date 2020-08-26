//Checar la documentacion de 'usage' de markdown para cambiar mi string como corresponda para que la renderice

marked.setOptions({
    breaks: true
});

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            markdown : placeholder
        }
        this.handleChangeEditor = this.handleChangeEditor.bind(this);
    }

    handleChangeEditor(e){
        this.setState({
            markdown: e.target.value
        })
    }
    render(){
        return(
            <main id="react-container">
                <h1>Extravagant Markdown Previewer!!</h1>
                <MarkupEditor markdown={this.state.markdown} onChange={this.handleChangeEditor}/>
                <ConvertedMarkup markdown={this.state.markdown}/>
            </main>
        );
    }
}

function MarkupEditor(props){
    return (<section id="editor-container" className="boxes">
                <h2 className="box-headings">Marked down text here:</h2>
                <textarea id="editor" type="text" value={props.markdown} onChange={props.onChange} className="text-container"/>
            </section>);
}

function ConvertedMarkup(props){
    return (<section id="preview-container" className="boxes">
                <h2 className="box-headings">HTML converted elements here:</h2>
                <div id="preview" className="text-container" dangerouslySetInnerHTML={{__html: marked(props.markdown)}}></div>
            </section>);
}

const placeholder = 
`# Welcome to my React Markdown Previewer!

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

There's also [links](https://www.freecodecamp.com), and
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


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
7. You can use any number betwen 0-9 followed by a '.'
8. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

//Correr React
ReactDOM.render(<App/>, document.getElementById('container'));