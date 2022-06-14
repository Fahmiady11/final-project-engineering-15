import React from 'react';

function PreviewMarkdown(props) {
  console.log(props.editorState.html)
  return (
    <>
      <div className="">
        <p className="block mb-2 text-sm text-gray-900 font-bold">Preview</p>
        <div
          className="border-2 bg-[#f2f2f2] border-gray-300 shadow-md p-4 font-poppins rounded-md "
          dangerouslySetInnerHTML={{ __html: props.editorState.html }}
        ></div>
      </div>
    </>
  );
}

export default PreviewMarkdown;