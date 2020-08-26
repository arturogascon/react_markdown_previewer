var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Checar la documentacion de 'usage' de markdown para cambiar mi string como corresponda para que la renderice

marked.setOptions({
    breaks: true
});

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            markdown: placeholder
        };
        _this.handleChangeEditor = _this.handleChangeEditor.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: "handleChangeEditor",
        value: function handleChangeEditor(e) {
            this.setState({
                markdown: e.target.value
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "main",
                { id: "react-container" },
                React.createElement(
                    "h1",
                    null,
                    "Extravagant Markdown Previewer!!"
                ),
                React.createElement(MarkupEditor, { markdown: this.state.markdown, onChange: this.handleChangeEditor }),
                React.createElement(ConvertedMarkup, { markdown: this.state.markdown })
            );
        }
    }]);

    return App;
}(React.Component);

function MarkupEditor(props) {
    return React.createElement(
        "section",
        { id: "editor-container", className: "boxes" },
        React.createElement(
            "h2",
            { className: "box-headings" },
            "Marked down text here:"
        ),
        React.createElement("textarea", { id: "editor", type: "text", value: props.markdown, onChange: props.onChange, className: "text-container" })
    );
}

function ConvertedMarkup(props) {
    return React.createElement(
        "section",
        { id: "preview-container", className: "boxes" },
        React.createElement(
            "h2",
            { className: "box-headings" },
            "HTML converted elements here:"
        ),
        React.createElement("div", { id: "preview", className: "text-container", dangerouslySetInnerHTML: { __html: marked(props.markdown) } })
    );
}

var placeholder = "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n7. You can use any number betwen 0-9 followed by a '.'\n8. And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n";

//Correr React
ReactDOM.render(React.createElement(App, null), document.getElementById('container'));