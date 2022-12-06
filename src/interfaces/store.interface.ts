export interface State {
  counter: number;
  selectedNumbers: number[];
  classList: string[];
  list: Post[];
  loading: boolean;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
