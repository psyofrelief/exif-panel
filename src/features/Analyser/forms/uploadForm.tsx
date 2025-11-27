"use client";

import { useAnalyserContext } from "@/contexts/analyserContext";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import FormMessage from "@/components/ui/FormMessage";

const urlRegex = /^(https?:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/;

const formSchema = z.object({
  imgUrl: z.string().regex(urlRegex, "Invalid URL"),
});

export default function UploadForm() {
  const { setImageUrl } = useAnalyserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imgUrl: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setImageUrl(values.imgUrl);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-md">
      <div className="flex flex-col gap-xs">
        <Input {...register("imgUrl")} placeholder="Enter Image URL..." />
        {errors.imgUrl && <FormMessage>{errors.imgUrl.message}</FormMessage>}
      </div>

      <Button type="submit">Get Image</Button>
    </form>
  );
}
