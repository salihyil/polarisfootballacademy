"use client";

import Carousel from "@/components/Carousel";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { CDNURL } from "./constant";

const PhotoGallery = () => {
  const [images, setImages] = useState<any>([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const { data, error } = await supabase.storage.from("images").list();

        const filteredImages = data?.filter((item: any) => item.name !== ".emptyFolderPlaceholder");
        const newData = filteredImages?.map((image: any) => `${CDNURL}${image.name}`);

        if (newData !== null) {
          setImages(newData);
        } else {
          console.log("Error:", error);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  }, []);

  return (
    <div className=" lg:mt-[150px] lg:px-16 pt-10">
      <Carousel images={images} />
    </div>
  );
};

export default PhotoGallery;
