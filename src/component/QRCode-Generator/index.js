import React from "react";
import { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";
const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [Input, setInput] = useState("");
  const handleGenerate = () => {
    setQrCode(Input);
    setInput("");
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div style={{ marginTop: "3.5rem" }}>
        <input
          type="text"
          name="qr-code"
          value={Input}
          placeholder="Enter your value here"
          onChange={(e) => setInput(e.target.value)}
        />

        {/* used to remove whitespace (spaces, tabs, and newlines) from both the beginning and the end of a string */}
        <button
          disabled={Input && Input.trim() !== "" ? false : true}
          onClick={handleGenerate}
        >
          Generate
        </button>
      </div>
      <div style={{ margin: "5rem" }}>
        <QRCode id="qr-code-value" value={qrCode} size={350} />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
