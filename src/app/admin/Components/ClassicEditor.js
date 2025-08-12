"use client"

import { useEffect } from "react";

export default function ClassicEditor() {
  useEffect(() => {
    // Dynamically load CKEditor script
    const script = document.createElement("script");
    script.src = "https://cdn.ckeditor.com/ckeditor5/11.0.1/classic/ckeditor.js";
    script.onload = () => {
      if (window.ClassicEditor) {
        window.ClassicEditor.create(document.querySelector("#editor"))
          .catch(error => console.error(error));
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="text-black">
      <h1>Classic Editor</h1>
      <textarea id="editor">
        <p>This is some sample content.</p>
      </textarea>
    </div>
  );
}
