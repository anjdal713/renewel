import React from "react";
import { useParams } from "react-router-dom";

const PdfViewer = () => {
  const { id } = useParams();
  const box = data.find((item) => item.id.toString() === id);

  if (!box) {
    return <div>유효하지 않은 페이지입니다.</div>;
  }

  return (
    <div>
      <h2>{box.title} - PDF Viewer</h2>
      <iframe title="PDF Viewer" src={box.link} width="100%" height="600px"></iframe>
    </div>
  );
};

export default PdfViewer;