import React, { useEffect, useState, useRef } from "react";
import { useDropzone } from "react-dropzone";

const container: React.CSSProperties = {
  width: "100%",
  height: "300px",
  backgroundColor: "#DFB8A8",
  position: "relative",
};

const dropzone: React.CSSProperties = {
  width: "100%",
  height: "100%",
};
export const DropzoneSection = () => {
  const [files, setFiles] = useState<(File & { preview: string })[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const handleClickImage = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <section style={container}>
        <div style={dropzone} {...getRootProps()}>
          <input {...getInputProps()} ref={fileInputRef} />{" "}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              color: "black",
              height: "100%",
            }}
          >
            <span
              style={{
                fontSize: "60px",
              }}
            >
              +
            </span>
            <p
              style={{
                fontSize: "20px",
                margin: "0px",
              }}
            >
              GÖRSEL
            </p>
          </div>
        </div>
        {files.length > 0 && (
          <img
            onClick={handleClickImage}
            onLoad={() => {
              URL.revokeObjectURL(files?.[0].preview);
            }}
            src={files[0]?.preview}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        )}
      </section>
    </div>
  );
};
