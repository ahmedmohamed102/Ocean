import { FC } from "react";

interface titleProps {
  title: string;
  isCentered?: boolean;
}

const Title: FC<titleProps> = ({ title }) => {
  return (
    <h1
      className={`bg-clip-text text-transparent bg-gradient-to-tr from-sky-200 via-sky-500 to-sky-200 font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-8`}
    >
      {title}
    </h1>
  );
};

export default Title;
