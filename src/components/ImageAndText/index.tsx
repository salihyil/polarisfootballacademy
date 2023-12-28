"use client";

import { CDNURL } from "@/app/[lng]/photo-gallery/constant";
import { useAppContext } from "@/context/AppWrapper";
import Button from "../Button";
import Card from "../Card";

export const ImageAndText = ({ image }: { image: { name: string } }) => {
  const { deleteImage } = useAppContext();

  return (
    <Card className="max-w-sm rounded shadow p-6">
      <Card.Img
        className="w-full"
        width={500}
        height={500}
        src={`${CDNURL}${image.name}`}
        alt={image.name}
        priority
      />
      <Card.Body className="p-3">
        <Card.Title className="font-bold" title="Image name:" />
        <Card.Text className="break-words">{image.name}</Card.Text>
        <Button color="bg-red-400" onClick={() => deleteImage(image.name)}>
          Delete Image
        </Button>
      </Card.Body>
    </Card>
  );
};
