import { useMyContext } from "../_context/MyContext";

export const Hello = () => {
  const { name } = useMyContext();

  return <div>{name && <div>Hello {name}</div>}</div>;
};
