import functions from "@/firebase/functions";

interface GetSanitizedToken
  extends firebase.default.functions.HttpsCallableResult {
  readonly data: string;
}

const uploadImage = async (dataUrl: string): Promise<string> => {
  const service = functions.httpsCallable("cloudinary-uploadImage");
  return service({dataUrl}).then((response: GetSanitizedToken) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result = JSON.parse(response.data);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
    return (result.secure_url as string) ? (result.secure_url as string) : "";
  });
};

export default uploadImage;
