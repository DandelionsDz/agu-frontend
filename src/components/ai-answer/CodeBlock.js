import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeBlock = ({ children, language }) => {
    return (
        <SyntaxHighlighter language={language} style={docco}>
            {children}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;
