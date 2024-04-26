import { useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const setUser = useSetRecoilState(userAtom);
  const navigate = useNavigate();
  // const axiosInstance = axiosPrivate();

  const logout = async () => {
    try {
      const response = await axios.post("/auth/logout");

      const data = response.data;

      console.log(data);

      const clearLocalStorageExceptKey = (keyToKeep) => {
        Object.keys(localStorage).forEach((key) => {
          if (key !== keyToKeep) {
            localStorage.removeItem(key);
          }
        });
      };
      // Usage
      clearLocalStorageExceptKey("localPrevPath");

      setUser(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return logout;
};

export default useLogout;
