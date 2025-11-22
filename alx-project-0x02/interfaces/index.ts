export interface IUser {
  name: string;
  email: string;
}

export interface CardProps {
  title: string;
  content: string;
}

export interface PostProps {
  userId: number;
  title: string;
  content: string;
}

export interface UserProps {
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  label: string;
}
