import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, type RootState } from "../store";
import { fetchImages } from "./imageGallerySlice";
import { useEffect } from "react";

export default function ProjectTwentySix() {
  const dispatch = useDispatch<AppDispatch>();
  const imgList = useSelector((state: RootState) => {
    return state.imageGalleryReducer.imgList;
  });

  useEffect(() => {
    dispatch(fetchImages());
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-center text-2xl font-bold">Image Gallery</h1>
      <div className="grid grid-cols-5 gap-2">
        {imgList.map((img, i) => {
          return (
            <img
              className="h-40 w-40 rounded-md"
              key={i}
              src={img.urls.small}
              alt={img.description}
            />
          );
        })}
      </div>
    </div>
  );
}
