import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Image from "next/image";
import Link from "next/link";

export default function SamplePhotosSection() {
  return (
    <div className="min-h-screen-minus-navbar flex justify-center items-center w-full">
      {/* Container */}
      <div className="flex gap-xl flex-1 justify-center">
        {/* Image - Left */}
        <div
          className={`relative p-sm bg-popover flex justify-center items-center rounded  aspect-square w-full cursor-pointer select-none `}
        >
          <Image
            src={"/images/samples/3.jpg"}
            alt="Preview"
            fill
            className="object-cover rounded"
            sizes="1000px"
          />
        </div>
        {/* Content - Right */}
        <div className="flex flex-col gap-y-xs justify-between max-w-[470px]">
          <Heading size="large" className="max-w-[400px]">
            Learn From Sample Photos.
          </Heading>
          <div className="flex flex-col gap-y-md mt-auto">
            <p className="max-w-[900px]">
              Explore our curated gallery of sample photos with complete
              Lightroom edits and camera settings. Download settings as presets
              and apply them to your own photos.
            </p>

            <Link href={"/sample-photos"} className="flex">
              <Button className="">Browse Sample Photos</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
