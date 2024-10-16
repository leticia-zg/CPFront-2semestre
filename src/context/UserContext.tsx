"use client"
import { createContext, Dispatch, useState } from "react";

export interface UserContextProps {
  userName: string;
  setUserName: Dispatch<React.SetStateAction<string>>;
}

export interface UserContextProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext<UserContextProps | null>(null);

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [userName, setUserName] = useState("");

  return (
    <UserContext.Provider value={{ setUserName, userName }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider};
export default UserContext;
