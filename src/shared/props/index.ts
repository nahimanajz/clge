import { IRoomDetail } from "../types";

export interface IImageSliderProps {
  images?: IRoomDetail;
}

export interface INavbarProps {
  onFilter: (value: string, isTyping:boolean) => void;
  children?: React.ReactNode;
  isTyping?:boolean
}
