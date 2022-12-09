export interface NumberStateInterface {
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

function state(): NumberStateInterface {
  return {
    counter: 0,
    selectedNumbers: [],
    classList: ["nestor", "juan", "raquel"],
    list: [],
    loading: false,
  };
}

export default state;
