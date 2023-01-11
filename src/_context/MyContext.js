import { createContext, useContext, useState } from "react";

export const MyContext = createContext({});

export const MyContextProvider = (props) => {
  const [name, setName] = useState("");
  return (
    <MyContext.Provider value={{ name, setName }}>
      {props.children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
