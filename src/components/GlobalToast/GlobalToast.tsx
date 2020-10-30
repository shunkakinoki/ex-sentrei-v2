import {Slide, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function GlobalToast(): JSX.Element {
  return (
    <ToastContainer
      position="top-center"
      transition={Slide}
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
}
