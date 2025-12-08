import { useContext } from "react"
import { UsersContext } from "./UsersContextProvider";

export const useUsersContext = () => {
    const context = useContext(UsersContext);

    if (!context) {
      throw new Error(
        "useUsersPageStates must be used within UsersPageStatesProvider"
      );
    }
    
    return context;
}