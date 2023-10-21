import { HTTP_URL } from "@/shared"
import { ICard } from "@/shared/types";
import axios from "axios"

export const fetchRooms =async ():Promise<ICard[]> =>  {
  const {data} = await axios.get(HTTP_URL)
  return data;
}