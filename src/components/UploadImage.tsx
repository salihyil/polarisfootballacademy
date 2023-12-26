"use client";

import { CDNURL } from "@/app/[lng]/photo-gallery/constant";
import { useAppContext } from "@/context/AppWrapper";
import { supabase } from "@/lib/supabase";
import { Card } from "./Card";
const UploadImage = () => {
  const { user, getImages, images } = useAppContext();
  const filteredData = images.filter((item: any) => item.name !== ".emptyFolderPlaceholder");

  const uploadImage = async (e: any) => {
    try {
      const files = e.target.files;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        const { data, error } = await supabase.storage.from("images").upload(file.name, file);
        if (data) {
          console.log(`File ${i + 1} uploaded successfully`);

          getImages();
        } else {
          console.log(`Error uploading file ${i + 1}:`, error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full container p-6">
      <label htmlFor="img">Eklenecek Resmi Seç:</label>
      <input
        multiple
        type="file"
        id="img"
        name="img"
        accept="image/png, image/jpeg"
        onChange={(e) => uploadImage(e)}
      />

      <div className="mt-4 grid gap-4 grid-cols-1 justify-items-center lg:grid-cols-2 :grid-cols-3">
        {filteredData.map((image: any) => {
          return (
            <div key={CDNURL + image.name}>
              <Card image={image} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UploadImage;
