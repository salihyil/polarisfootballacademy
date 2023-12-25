"use client";

import { CDNURL } from "@/app/[lng]/photo-gallery/constant";
import { useAppContext } from "@/context";
import { supabase } from "@/lib/supabase";
import { Card } from "./Card";
const Admin = () => {
  const { user, getImages, images } = useAppContext();
  const filteredData = images.filter((item: any) => item.name !== ".emptyFolderPlaceholder");

  const uploadImage = async (e: any) => {
    try {
      console.log(e.target.files);

      const files = e.target.files;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        console.log(file);

        const { data, error } = await supabase.storage.from("images").upload(file.name, file);
        if (data) {
          console.log(`File ${i + 1} uploaded successfully`);
          // Burada getImages() fonksiyonunu çağırıp işlemin tamamlandığını belirtebilirsiniz.
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

      {/* https://mssnpyzjcyfdcpjctryi.supabase.co/storage/v1/object/public/images/403605735_376183558307606_1752575454078985055_n.jpg  */}

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

export default Admin;
