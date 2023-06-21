export interface IPost {
  id: number,
  text: string, 
}

export interface IProps1 {
  massage: string, 
  setMassage: (val: string) => void, 
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export interface IProps2 {
  posts: IPost[], 
  setPosts: (val: IPost[]) => void,
};

export interface ButtonProps {
  handleDelete?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export interface IProps3 {
  time: Date;
  timeZone: number, 
}
