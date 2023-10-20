import React, { useState } from "react";

const [file, setFile] = useState(null);

const handleFileChange = (e) => {
  setFile(e.target.files[0]);
};

const handleUpload = () => {
  if (file) {
    const formData = new FormData();
    formData.append("image", file);

    fetch("/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Image uploaded successfully:", data.message);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  }
};

return (
  <div>
    <h1>Image Upload</h1>
    <input type="file" accept="image/*" onChange={handleFileChange} />
    <button onClick={handleUpload}>Upload Image</button>
  </div>
);
