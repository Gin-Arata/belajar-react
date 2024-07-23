import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";

const useLogin = () => {
  const [username, setUsername] = useState("");
  // Penggunaan useEffect untuk mengambil data dari token localStorage dan melakukan decode token
  useEffect(() => {
    const token = localStorage.getItem("token");

    // Handle jika tidak ada token
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/login";
    }
  }, []);

  return username;
};

export default useLogin;
