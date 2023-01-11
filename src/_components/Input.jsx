import { useState } from "react";
import { useMyContext } from "../_context/MyContext";

export const Input = () => {
  const [upDate, setUpdate] = useState("");
  const { setName } = useMyContext();
  return (
    <>
      <div>Hi! What's your name?</div>
      <input type="text" onChange={(e) => setUpdate(e.target.value)} />
      <button onClick={(e) => setName(upDate)}>GO!</button>
    </>
  );
};
