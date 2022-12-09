export interface NumberStateInterface {
  counter: number;
  selectedNumbers: number[];
  classList: string[];
  list: PostInterface[];
  loading: boolean;
}

export interface PostInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
}
