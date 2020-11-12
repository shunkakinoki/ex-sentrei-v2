import imageCompression from "browser-image-compression";

import uploadImage from "@/callable/uploadImage";

// eslint-disable-next-line import/prefer-default-export
function readFileUrl(file: File | Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = res => {
      if (!res.target) {
        return;
      }
      resolve(res?.target.result);
    };
    reader.onerror = err => reject(err);

    reader.readAsDataURL(file);
  });
}

// eslint-disable-next-line import/prefer-default-export
export const getImageUrl = async (file: File): Promise<string> => {
  const output = await imageCompression(file, {
    maxSizeMB: 3,
  });

  const contents = await readFileUrl(output);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const secureUrl = await uploadImage(contents);
  return secureUrl;
};
