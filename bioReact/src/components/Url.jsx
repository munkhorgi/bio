import { instance } from "../App";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

  const Url = () => {
  const params = useParams();
  const getData = async () => {
    const res = await instance.get(`/Url/${params.shortUrl}`);
    window.location.replace(res.data.data.Url)
    console.log(res, 'ahah')
  };
  useEffect(() => {
    getData();
  }, []);
  return <></>;
};

export default Url;