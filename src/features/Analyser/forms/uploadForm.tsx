"use client";

import { useAnalyserContext } from "@/contexts/analyserContext";
import { z } from "zod";
import { useForm, useWatch } from "react-hook-form"; // Added useWatch
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import FormMessage from "@/components/ui/FormMessage";
import FormLabel from "@/components/ui/FormLabel";
import { useState } from "react";

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
    control,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imgUrl: "",
    },
  });

  const imgUrlValue = useWatch({
    control,
    name: "imgUrl",
    defaultValue: "",
  });

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
      const errorMsg = data.error ?? "Something went wrong";
      setErrorMessage(errorMsg);

      setTimeout(() => {
        setErrorMessage((currentMessage) => {
          if (currentMessage === errorMsg) {
            return null;
          }
          return currentMessage;
        });
      }, 5000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-md"
    >
      <div className="flex flex-col gap-xs">
        <FormLabel htmlFor="imgUrl">Image URL</FormLabel>
        <div className="flex xl:flex-row lg:flex-col sm:flex-row flex-col items-center gap-sm">
          <Input id="imgUrl" {...register("imgUrl")} placeholder="https://" />
          <Button
            type="submit"
            disabled={loading || imgUrlValue.trim() === ""}
            className="xl:w-fit w-full"
          >
            Get Image
          </Button>
        </div>
        {errors.imgUrl && <FormMessage>{errors.imgUrl.message}</FormMessage>}
      </div>
      {errorMessage && <FormMessage>{errorMessage}</FormMessage>}
    </form>
  );
}
