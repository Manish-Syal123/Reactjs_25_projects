import React, { useRef, useState } from "react";
import "./fileupload.css";
const FileUpload = () => {
  const [file, setFile] = useState();
  const uploadReference = useRef();
  const progressReference = useRef();
  const statusReference = useRef();
  const loadReference = useRef();

  const handleUploadFile = () => {
    const File = uploadReference.current.files[0];
    console.log(File);
    if (File) {
      setFile(URL.createObjectURL(File));
    } else {
      return;
    }

    let formData = new FormData();
    formData.append("image", File);

    let xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", handleProgress, false);
    xhr.addEventListener("load", handleSuccess, false);
    xhr.addEventListener("error", handleError, false);
    xhr.addEventListener("abort", handleabort, false);

    xhr.open("post", "https://v2.convertapi.com/upload");
    xhr.send(formData);
  };

  const handleProgress = (event) => {
    loadReference.current.innerHTML = `Uploaded ${event.loaded} bytes of ${event.total}`;
    const percentage = (event.loaded / event.total) * 100;
    progressReference.current.value = Math.round(percentage);
    statusReference.current.innerHTML = `${Math.round(
      percentage
    )} is Uploaded.`;
  };
  const handleSuccess = (event) => {
    statusReference.current.innerHTML = event.target.responseText;
    progressReference.current.value = 0;
  };
  const handleError = () => {
    statusReference.current.innerHTML = `Upload Failed! Please try again`;
  };
  const handleabort = () => {
    statusReference.current.innerHTML = `Upload aborted! Please try again`;
  };

  return (
    <div className="file-upload-container">
      <h1>File Upload</h1>
      <input
        onChange={handleUploadFile}
        type="file"
        name="file"
        ref={uploadReference}
      />
      <label htmlFor="">
        File Progress:
        <progress ref={progressReference} value={"0"} max={"100"} />
      </label>
      <p ref={statusReference} className="status"></p>
      <p ref={loadReference} className="load"></p>
      <img src={file} alt={file} width={300} height={300} />
    </div>
  );
};

export default FileUpload;
