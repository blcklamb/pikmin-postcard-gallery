"use client";

import { FileUpload } from "@/components/ui/file-upload";
import Image from "next/image";
import { uploadAssetAndGetAssetUrl } from "@/lib/upload-storage";

interface ClipboardInputProps {
  uploadedImageUrl?: string;
  onChangeFormData: (data: string) => void;
}

export function ClipboardInput({
  uploadedImageUrl,
  onChangeFormData,
}: ClipboardInputProps) {
  const handleFileUpload = async (files: File[]) => {
    if (files.length === 0) {
      onChangeFormData("");
      return;
    }
    const url = await uploadAssetAndGetAssetUrl({
      file: files[0],
      bucketName: "images",
    });
    url && onChangeFormData(url);
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center  rounded-lg">
      {uploadedImageUrl && (
        <Image
          alt={"image preview"}
          width={500}
          height={500}
          className=" min-w-[300px] aspect-auto"
          src={uploadedImageUrl}
        />
      )}
      <FileUpload
        uploadedImageUrl={uploadedImageUrl}
        onChange={handleFileUpload}
      />
    </div>
  );
}
