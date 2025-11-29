"use client";

import { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

export default function RichTextEditor() {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    // Prevent multiple Quill inits
    if (editorRef.current.querySelector(".ql-editor")) return;

    const quill = new Quill(editorRef.current, {
      theme: "snow",
    });
  }, []);

  return <div ref={editorRef} style={{ height: "300px" }} />;
}
