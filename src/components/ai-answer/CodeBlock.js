import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowLight, androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeBlock = ({ children, language,style }) => {
    return (
        <SyntaxHighlighter language={language} style={style?androidstudio:stackoverflowLight}>
            {children}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;
