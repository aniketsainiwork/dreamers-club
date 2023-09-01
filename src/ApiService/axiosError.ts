import { showMessage } from "src/Utils/MessageModal";
import { AxiosError } from "axios";

export const axiosError = async (err: AxiosError | any) => {
  if (err.response) {

    if (err.response.status === 401) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("isLogin");

      window.location.href = "/";
    } else {
      let message: any =
        err?.response?.data?.message ??
        "Sorry! something went wrong, Please reload your page";

      showMessage({
        msgTyp: "error",
        message: message,
      });
    }
  }
};
