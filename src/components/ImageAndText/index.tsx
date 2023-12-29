"use client";

import { CDNURL } from "@/app/[lng]/photo-gallery/constant";
import { useAppContext } from "@/context/AppWrapper";
import { useState } from "react";

import Button from "@/components/Button";
import Card from "@/components/Card";
import Modal from "@/components/Modal";

export const ImageAndText = ({ image }: { image: { name: string } }) => {
  const { supabase, getImages } = useAppContext();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  async function deleteImage(imageName: any) {
    const { data, error } = await supabase.storage.from("images").remove([imageName]);

    if (data) {
      getImages();
    } else {
      alert(error);
    }
  }

  return (
    <>
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
          <Card.Title className="font-bold">Image name:</Card.Title>
          <Card.Text className="break-words">{image.name}</Card.Text>
          <Button color="bg-red-400" onClick={handleOpen}>
            Delete Image
          </Button>
        </Card.Body>
      </Card>

      <Modal
        open={open}
        handleClose={handleClose}
        title="Resmi Sil"
        content="Resmi silmek istediğine emin misin?"
        handleClick={() => deleteImage(image.name)}></Modal>
    </>
  );
};
