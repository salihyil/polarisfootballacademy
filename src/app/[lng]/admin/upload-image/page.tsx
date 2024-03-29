"use client";

import { CDNURL } from "@/app/[lng]/photo-gallery/constant";
import { ImageAndText } from "@/components/ImageAndText";
import { useAppContext } from "@/context/AppWrapper";
import { supabase } from "@/lib/supabase";
const UploadImage = () => {
  const { getImages, images } = useAppContext();
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
    <>
      <label htmlFor="img">Eklenecek Resmi Seç:</label>
      <input
        multiple
        type="file"
        id="img"
        name="img"
        accept="image/png, image/jpeg"
        onChange={(e) => uploadImage(e)}
      />

      <div className="mt-4 grid gap-4  justify-items-center grid-cols-1  mdl:grid-cols-2  3xl:grid-cols-3">
        {filteredData.length === 0 && "Gösterilecek resim yok."}
        {filteredData.map((image: any) => {
          return (
            <div key={CDNURL + image.name}>
              <ImageAndText image={image} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UploadImage;
