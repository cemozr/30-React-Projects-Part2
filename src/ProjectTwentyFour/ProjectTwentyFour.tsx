import { useEffect, useState } from "react";
import axios from "axios";

type Data = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
const baseUrl = "https://jsonplaceholder.typicode.com/";
export default function ProjectTwentyFour() {
  const [data1, setData1] = useState<Data>({
    userId: 0,
    id: 0,
    title: "",
    completed: false,
  });
  const [data2, setData2] = useState<Data>({
    userId: 0,
    id: 0,
    title: "",
    completed: false,
  });

  const fetchDatas = async () => {
    await axios
      .get(`${baseUrl}todos/1`)
      .then((r) => setData1(r.data))
      .catch((error) => console.error("error", error));
    await axios
      .get(`${baseUrl}todos/2`)
      .then((r) => setData2(r.data))
      .catch((error) => console.error("error", error));
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  return (
    <div>
      <h1>{data1.title}</h1>
      <h1>{data2.title}</h1>
    </div>
  );
}
