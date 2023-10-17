import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3] }],
    ["bold", "italic", "underline"],
    ["link", "image"],
    ["code-block"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

function Editor() {
  const [value, setValue] = useState("");

  const onChange = (content, delta, source, editor) => {
    console.log(editor.getContents());
    setValue(content);
  };

  return (
    <ReactQuill
      modules={modules}
      theme="snow"
      value={value}
      onChange={onChange}
    />
  );
}

export default Editor;
