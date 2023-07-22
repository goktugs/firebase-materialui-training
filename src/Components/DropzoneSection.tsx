import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

export const DropzoneSection = () => {
  const thumbsContainer: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  };

  const thumb: React.CSSProperties = {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: "border-box",
  };

  const thumbInner: React.CSSProperties = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden",
  };

  const img: React.CSSProperties = {
    display: "block",
    width: "auto",
    height: "100%",
  };

  const [files, setFiles] = useState<(File & { preview: string })[]>([]);
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

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <div>
      <section className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <aside style={thumbsContainer}>{thumbs}</aside>
      </section>
    </div>
  );
};
