import { Alert, Box } from "@mui/material";
import "./Preview.css";
import CodeBlock from "../ai-answer/CodeBlock";
import { escape, unescape } from "html-escaper";
import Tag from "./Tag";
import TagTyping from "./TagTyping";
function Preview({ store, isAnswering }) {
    let htmlContent = store.data.html;
    console.log(htmlContent);
    let dataInjectBr = htmlContent
        .replaceAll('<pre class="ql-syntax"', "<br><pre class='ql-syntax'")
        .replaceAll("</pre>", "</pre><br>");

    let htmlElements = dataInjectBr.split("<br>").filter((element) => {
        return element != "";
    });

    return (
        <Box padding={"15px 5px"}>
            <Alert
                sx={{
                    padding: "8px 5px",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "5px",
                }}
                severity="info"
            >
                Kiểm tra bài đăng của bạn trước khi gửi
            </Alert>
            <div className="content-preview">
                <br />
                {htmlElements.map((element, index) => {
                    let unescapedElement = unescape(element).replace(
                        /&nbsp;/g,
                        " "
                    );
                    return (
                        <div key={index}>
                            {element.includes("ql-syntax") ? (
                                <CodeBlock key={index} language={"css"}>
                                    {unescapedElement.substring(
                                        unescapedElement.indexOf(">") + 1,
                                        unescapedElement.lastIndexOf("<")
                                    )}
                                </CodeBlock>
                            ) : (
                                <>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: element,
                                        }}
                                    ></div>
                                    {htmlElements[index + 1]?.includes(
                                        "ql-syntax"
                                    ) || <br />}
                                </>
                            )}
                        </div>
                    );
                })}
                {isAnswering || (
                    <>
                        <Tag tags={store.data.tags} />
                        <TagTyping />
                    </>
                )}
            </div>
        </Box>
    );
}

export default Preview;
