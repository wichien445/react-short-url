import React from "react";
import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";

function redirectComponents() {
  let params = useParams();
  useEffect(() => {
    console.log("Params", params);
  }, [params]);
  const inputRef = useRef(null);
  const handleCopy = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand("copy");

      const copyButton = document.getElementById("copyButton");
      copyButton.textContent = "Copied!";
      setTimeout(() => {
        copyButton.textContent = "Copy Text";
      }, 2000);
    }
  };
  return (
    <div>
      <input
        className="px-4 h-1/4 w-9/12 border-gray-500 border-solid border-2 rounded-md"
        type="text"
        placeholder="Short URL"
        ref={inputRef}
        required
      />
      <button
        className="bg-amber-500 m-2 h-1/4 rounded px-4 py-2 text-white"
        onClick={handleCopy}
        id="copyButton"
      >
        Copy URL
      </button>
      <p className="text-xl text-left ml-5 mt-5">Long URL : </p>
      <button className="bg-amber-500 m-2 h-1/4 rounded px-4 py-2 text-white text-left">
        Total of clicks
      </button>
      <button
        className="bg-amber-500 m-2 h-1/4 rounded px-4 py-2 text-white text-left"
        type="submit"
      >
        Shorten Another URL
      </button>
    </div>
  );
}

export default redirectComponents;
