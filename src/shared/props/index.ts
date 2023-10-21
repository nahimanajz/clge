import { IRoomDetail } from "../types";

export interface IImageSliderProps {
    images?: IRoomDetail;
  }
  
export interface INavbarProps {
  onFilter(value:string): VoidFunction;
  children: any
}
export interface INavigationTabProps {
  onFilterByDay(value:string):VoidFunction
}