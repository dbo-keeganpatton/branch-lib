"use client";

import { useEffect, useRef, useState } from "react";
import type QuillType from "quill";
import "quill/dist/quill.snow.css";

export default function RichTextEditor() {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const quillRef = useRef<QuillType | null>(null);

  const [value, setValue] = useState("");

  useEffect(() => {
    if (quillRef.current) return;

    async function loadQuill() {
      const Quill = (await import("quill")).default as typeof QuillType;

      if (!editorRef.current) return;

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
        setValue(quillRef.current!.root.innerHTML);
      });
    }

    loadQuill();
  }, []);

  return (
    <div>
      <div
        ref={editorRef}
        style={{ height: "300px" }}
        className="bg-black border border-purple-600"
      />
    </div>
  );
}

