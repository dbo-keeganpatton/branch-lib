"use client";

import { useEffect, useRef, useState } from "react";
import "quill/dist/quill.snow.css";

export default function RichTextEditor() {
  const editorRef = useRef(null);
  const quillRef = useRef(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (quillRef.current) return;

    async function loadQuill() {
      const Quill = (await import("quill")).default;

      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            ["image", "code-block"],
          ],
        },
      });

      quillRef.current.on("text-change", () => {
        setValue(quillRef.current.root.innerHTML);
      });
    }

    loadQuill();
  }, []);

  return (
    <div className="w-full">
      <div
        ref={editorRef}
        style={{ height: "300px" }}
        className="bg-black border border-purple-600"
      />
    </div>
  );
}

