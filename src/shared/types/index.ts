export interface IRoom {
  id: string;
  avatar: string;
  title: string;
  description: string;
  price:  string;
  shortDescription: string;
  createdAt: string;
  country:string;
  city: string;
  daytime:string;
  person:string;
  images:IRoomDetail[]
}

export interface IRoomDetail {
  id:string,
  leftSide:string,
  rightSide:string,
  front:string,
  back:string
}

