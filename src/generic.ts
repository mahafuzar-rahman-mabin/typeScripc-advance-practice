const wrapArray = <T>(value: T) => {
  return [value];
};

const stringArr = wrapArray<string>("asdfasd");
const numbArr = wrapArray<number>(123423);

stringArr.map((item) => item.toUpperCase());

interface User {
  name: string;
  role: string;
}

interface Blog {
  title: string;
  description: string;
  date: string;
}

interface ApiResponse<T> {
  data: T;
  success: boolean;
  statusCode: number;
}

type UserResponse = ApiResponse<User>;
type BlogResponse = ApiResponse<Blog>;

const userRes: ApiResponse<User> = {
  statusCode: 200,
  success: true,
  data: {
    name: "sdfas",
    role: "sfas",
  },
};

type User2 = {
  id: number;
  name: string;
  role: string;
};

type UserKeyy = keyof User2;
