import { useContext } from "react";
import { ManagePageContext } from "./ManagePageContext";

export const useManegePageContext = () => {
    const context = useContext(ManagePageContext);
    
    if (!context) {
    throw new Error(
      "useManagePageStates must be used within ManagePageStatesProvider"
    );
   }

    return context;
};