import { createClient } from "@supabase/supabase-js";

const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const NEXT_PUBLIC_SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const supabase = createClient(
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export type FileBody =
  | ArrayBuffer
  | ArrayBufferView
  | Blob
  | Buffer
  | File
  | FormData
  | NodeJS.ReadableStream
  | ReadableStream<Uint8Array>
  | URLSearchParams
  | string;

export type BucketName = "images";

async function uploadAsset({
  file,
  bucketName,
  filePath,
  contentType,
}: {
  file: FileBody;
  bucketName: BucketName;
  filePath: string;
  contentType?: string;
}) {
  const assetPath = `${NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${bucketName}/${filePath}`;
  const { data, error } = await supabase.storage
    .from(bucketName)
    .upload(filePath, file, {
      contentType,
      upsert: true,
    });
  return {
    data: data
      ? {
          ...data,
          assetUrl: assetPath,
        }
      : null,
    error,
  };
}

async function uploadAssetAndGetAssetUrl({
  file,
  bucketName,
}: {
  file: File;
  bucketName: BucketName;
}) {
  const fileExtension = file.name.split(".").pop();
  const filePath = `${Date.now()}.${fileExtension}`;
  const { data, error } = await uploadAsset({
    file,
    bucketName,
    filePath,
  });

  if (error) {
    console.error("Failed to upload asset:", error);
    throw error;
  }
  return data ? data.assetUrl : null;
}

export { uploadAssetAndGetAssetUrl };
