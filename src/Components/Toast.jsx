import { ToastContainer, toast } from "react-toastify";
const Toast = () => {
  return (
    <div>
      <button
        onClick={() => {
          toast("welcome");
        }}
      >
        Notify !
      </button>
      <ToastContainer />
    </div>
  );
};

export default Toast;
