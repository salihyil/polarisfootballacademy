"use client";

import { CDNURL } from "@/app/[lng]/photo-gallery/constant";
import { useAppContext } from "@/context";
import Image from "next/image";
import Button from "../Button";

export const Card = ({ image }: { image: { name: string } }) => {
  const { deleteImage } = useAppContext();

  return (
    <div className="max-w-sm rounded shadow p-6">
      <Image
        className="w-full"
        width={500}
        height={500}
        src={`${CDNURL}${image.name}`}
        alt={image.name}
        priority
      />
      <div className="p-3 ">
        <div className="break-words  ">
          <div className="font-bold ">Image name:</div> <div>{image.name}</div>
        </div>
        <Button color="bg-red-400" onClick={() => deleteImage(image.name)}>
          Delete Image
        </Button>
      </div>
    </div>
  );
};
