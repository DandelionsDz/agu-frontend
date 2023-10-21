import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
    toolbar: [
        [{ header: [1, 2, 3] }],
        ["bold", "italic", "underline"],
        ["link", "image"],
        ["code-block"],
    ],
};

function Editor({ store: dataStore }) {
    console.log(dataStore.data.html);
    const onChange = (content, delta, source, editor) => {
        dataStore.setData({ html: content, text: editor.getText() });
    };

    return (
        <ReactQuill
            modules={modules}
            theme="snow"
            value={dataStore.data.html}
            onChange={onChange}
        />
    );
}

export default Editor;
