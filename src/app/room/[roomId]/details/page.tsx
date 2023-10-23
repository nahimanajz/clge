"use client";
import ImageGrid from "@/components/ImageGrid";
import Loader from "@/components/Loader";
import { fetchDetail } from "@/services/rooms";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

const RoomDetails = () => {
  const { roomId } = useParams();

  const { isLoading, data } = useQuery({
    queryKey: ["RoomDetails"],
    queryFn: () => fetchDetail(roomId as string),
  });
  const router = useRouter();

  if (isLoading) return <Loader />;
  const convertDate = new Date(data?.createdAt as string);
   const date = convertDate.toLocaleDateString()
   

  return (
    <div className="bg-white flex justify-center align-center flex-col px-10 py-2">
      <FiArrowLeft
        className="text-primary w-16 h-8 mb-4"
        onClick={() => router.back()}
      />
      <ImageGrid images={data?.images[0]} />

      <div className="flex flex-col shadow-slate-400  px-40 mt-10">
        <h1 className="text-[20px] font-bold text-primary">{data?.title}</h1>

        <p className="text-slate-600 font-regular text-[16px] mb-8">
          Room added on: {date } by <b>{data?.person} for ${parseInt(data?.price as string)} for a night available on {data?.daytime} </b>
        </p>
        <p className="text-slate-600 font-regular text-[14px]">
          {data?.shortDescription}
        </p>
        <p className="text-[20px] font-bold text-dark mb-8">
          More about {data?.title}
        </p>
        <p className="text-[16px]  text-dark">
          {data?.description}
        </p>
         
      </div>
    </div>
  );
};
export default RoomDetails;
