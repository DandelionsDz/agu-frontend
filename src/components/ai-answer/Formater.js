import CodeBlock from "./CodeBlock";

function Formater({ children, style }) {
    let data = children.replaceAll("```", "```c0debl0ck");
    let dataArray = data.split("```");
    let isClosed = true;
    return (
        <div>
            {dataArray.map((element, i) => {
                if (element.includes("c0debl0ck")) {
                    let cleanData = element.replaceAll("c0debl0ck", "");
                    if (!(isClosed = !isClosed)) {
                        let language = cleanData.substring(
                            0,
                            cleanData.indexOf("\n")
                        );
                        return (
                            <CodeBlock style={style} key={i} language={language}>
                                {cleanData}
                            </CodeBlock>
                        );
                    } else {
                        return cleanData;
                    }
                } else return element;
            })}
        </div>
    );
}

export default Formater;
