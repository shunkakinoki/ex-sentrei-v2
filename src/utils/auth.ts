import firebase from "@/firebase";
import auth from "@/firebase/auth";

export const sendPasswordResetEmail = (email: string): Promise<void> => {
  return auth.sendPasswordResetEmail(email);
};

export const signUpWithEmailAndPassword = (
  email: string,
  password: string,
): Promise<firebase.auth.UserCredential> => {
  return auth.createUserWithEmailAndPassword(email, password);
};

export const logInWithEmailAndPassword = (
  email: string,
  password: string,
): Promise<firebase.auth.UserCredential> => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const signInWithGoogle = (): Promise<firebase.auth.UserCredential> => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
};

export const signOut = (): Promise<void> => {
  return auth.signOut();
};
