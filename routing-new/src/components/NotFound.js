import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      // navigate("/");
      navigate(-1);
    }, 2000);
  }, []);

  return <h1>404 Not found</h1>;
};

export default NotFound;
