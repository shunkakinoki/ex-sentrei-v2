import functions from "@/firebase/functions";

const spaceCustomerCreate = async (
  email: string,
  spaceId: string,
): Promise<firebase.default.functions.HttpsCallableResult> => {
  const service = functions.httpsCallable("customers-spaceCustomerCreate");
  return service({email, spaceId});
};

export default spaceCustomerCreate;
