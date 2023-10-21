import { HTTP_URL } from "@/shared"
import { IRoom, IRoomDetail } from "@/shared/types";
import axios from "axios"

export const fetchRooms =async ():Promise<IRoom[]> => (await axios.get(HTTP_URL)).data
export const fetchDetail =async (RoomId: string):Promise<IRoom> => (await axios.get(`${HTTP_URL}/${RoomId}`)).data
