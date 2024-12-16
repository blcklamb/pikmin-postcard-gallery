"use client";
import React, { useEffect, useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import Image from "next/image";

interface ClipboardInputProps {
  onChangeFormData: (data: string) => void;
}

export function ClipboardInput({ onChangeFormData }: ClipboardInputProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [preview, setPreview] = useState<string | null>("");
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    onChangeFormData(files[0].name);
  };

  useEffect(() => {
    if (files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(files[0]);
    } else {
      setPreview(null);
    }
  }, [files]);

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center  rounded-lg">
      {preview && (
        <Image
          alt={"image preview"}
          width={100}
          height={100}
          className=" min-w-[300px] aspect-auto"
          src={preview as string}
        />
      )}
      <FileUpload onChange={handleFileUpload} />
    </div>
  );
}
