import { instance } from "../App";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const Url = () => {
  const params = useParams();
  const getData = async () => {
    const res = await instance.get(`/Urls/${params.ShortUrl}`);
    window.location.replace(res.data.data.Url);
  };
  useEffect(() => {
    getData();
  }, []);
  return <></>;
};

export default Url;