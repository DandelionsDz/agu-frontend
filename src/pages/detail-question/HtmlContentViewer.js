import { unescape } from "html-escaper";
import CodeBlock from "../../components/ai-answer/CodeBlock";
import "./QuestionBodyViewer.css";

function HtmlContentViewer({ body }) {
    let dataInjectBr = body
        .replaceAll('<pre class="ql-syntax"', "<br><pre class='ql-syntax'")
        .replaceAll("</pre>", "</pre><br>");

    let htmlElements = dataInjectBr.split("<br>").filter((element) => {
        return element != "";
    });

    return (
        <div className="question-body-viewer">
            {htmlElements.map((element, index) => {
                let unescapedELement = unescape(element).replace(
                    /&nbsp;/g,
                    " "
                );
                const seperator = index < htmlElements.length - 1 ? <br /> : "";
                return (
                    <div key={index}>
                        {element.includes("ql-syntax") ? (
                            <CodeBlock key={index} language={"css"}>
                                {unescapedELement.substring(
                                    unescapedELement.indexOf(">") + 1,
                                    unescapedELement.lastIndexOf("<")
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
                                ) || seperator}
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default HtmlContentViewer;
