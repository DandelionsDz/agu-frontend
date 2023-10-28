import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeBlock = ({ children, language }) => {
    return (
        <SyntaxHighlighter language={language} style={stackoverflowLight}>
            {children}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;
