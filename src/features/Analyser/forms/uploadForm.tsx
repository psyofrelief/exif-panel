"use client";

import { useAnalyserContext } from "@/contexts/analyserContext";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import FormMessage from "@/components/ui/FormMessage";
import FormLabel from "@/components/ui/FormLabel";
import { useState } from "react";
import { useExtractMetadata } from "../hooks/useExtractMetadata";

const urlRegex = /^(https?:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/;

const formSchema = z.object({
  imgUrl: z.string().regex(urlRegex, "Invalid URL"),
});

export default function UploadForm() {
  const { setImageUrl, setFile } = useAnalyserContext();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imgUrl: "",
    },
  });

  const imgUrlValue = watch("imgUrl");

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setErrorMessage(null);
    setLoading(true);

    const form = new FormData();
    form.append("url", values.imgUrl);

    const res = await fetch("/api/validate-url-image", {
      method: "POST",
      body: form,
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      setImageUrl(values.imgUrl);
      setFile(null);
      setErrorMessage(null);
      reset();
    } else {
      setErrorMessage(data.error ?? "Something went wrong");
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-md">
      <div className="flex flex-col gap-xs">
        <FormLabel htmlFor="imgUrl">Image URL</FormLabel>
        <Input id="imgUrl" {...register("imgUrl")} placeholder="https://" />
        {errors.imgUrl && <FormMessage>{errors.imgUrl.message}</FormMessage>}
      </div>
      {errorMessage && <FormMessage>{errorMessage}</FormMessage>}
      <Button
        disabled={loading || !!errors.imgUrl || imgUrlValue.trim() === ""}
      >
        Get Image
      </Button>
    </form>
  );
}
