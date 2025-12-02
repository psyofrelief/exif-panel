"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import UploadIcon from "@/components/icons/UploadIcon";
import { useAnalyserContext } from "@/contexts/analyserContext";

export default function UploadImage() {
  const { setFile, setImageUrl, blobUrl, imageUrl } = useAnalyserContext();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [dragActive, setDragActive] = useState(false);

  const handleSelectedFile = (file: File | null) => {
    setFile(file);
    setImageUrl(""); // reset URL mode
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSelectedFile(e.target.files?.[0] ?? null);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    const dt = new DataTransfer();
    dt.items.add(file);
    if (fileInputRef.current) fileInputRef.current.files = dt.files;

    handleSelectedFile(file);
  };

  const previewSrc = blobUrl || imageUrl || null;

  return (
    <div
      className={`relative p-sm bg-popover flex justify-center items-center rounded border border-dashed aspect-square lg:max-w-full md:max-w-[512px] w-full cursor-pointer select-none hover:border-foreground 
        ${dragActive ? "border-foreground bg-background" : "border-outline"}`}
      onClick={() => fileInputRef.current?.click()}
      onDragEnter={() => setDragActive(true)}
      onDragOver={(e) => e.preventDefault()}
      onDragLeave={() => setDragActive(false)}
      onDrop={onDrop}
    >
      {previewSrc ? (
        <Image
          src={previewSrc}
          alt="Preview"
          fill
          className="object-cover rounded"
          sizes="256px"
        />
      ) : (
        <div className="flex flex-col items-center gap-y-sm select-none">
          <p>Drop an image here</p>
          <UploadIcon className="size-[80px]" />
          <p>Or click to browse</p>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={onInputChange}
        className="hidden"
      />
    </div>
  );
}
