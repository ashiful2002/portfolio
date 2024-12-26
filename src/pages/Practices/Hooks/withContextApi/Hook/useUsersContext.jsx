import { createContext, useContext, useState } from "react";
// import { UsersContext } from "./UserContext";
import { usersData } from "../../../../../Constants/Index";

export const UsersContext = createContext();

export const useUsersContext = () => {
  return useContext(UsersContext);
};

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(usersData);
  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};
export default UsersProvider;
