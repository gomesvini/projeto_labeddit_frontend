import React, { useContext} from "react";
import { Modall, ModalContent} from "./styled-Modal";
import { GlobalContext } from "../../context/GlobalContext";

export const ModalError = () => {
  const context = useContext(GlobalContext)
  
  const { errorLogin , setModal} = context;


  const handleOutSideClick = (e , id ) => {
    if (e.target.id === "id") { 
      setModal(false);
    }
  };
 

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 400:
        return "Email ou senha incorretos";
        
      case 404:
        return "Email não encontrado";
        
      default:
        return "An error occurred.";
    }
  };
  return (
    <Modall id={"id"} onClick={handleOutSideClick}>
      <ModalContent>
        <div>
          <h1>Error</h1>
          <p>{getErrorMessage(errorLogin)}</p>
        </div>
      </ModalContent>
    </Modall>
  );
};
