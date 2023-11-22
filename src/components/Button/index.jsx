import { Button } from "@mui/material";
import React, { useState } from "react";
import { useApi } from "../../hooks/useApi";
import style from "./Buttons.module.css";

function Buttons() {
  const api = useApi();
  const [disabledButton, setDisabledButton] = useState(null);
  const sendMessage = async (e) => {
    setDisabledButton(e.target.value);

    const response = await api.getButton(e.target.value);

    setTimeout(() => {
      setDisabledButton(null);
    }, 5000);

    return response;
  };

  return (
    <>
      {/* 

        - criar uma rota 
        - /button/:value 
        - usar templete string 
        - receber valores abaixo: 
        - DEVE SER UM BOTÃO PARA CADA PARÂMETRO 
        - Open,close, R1ON,R1OFF,R2ON,R2OFF 
        
        */}
      <div className={style.botoes}>
        <Button
          variant="contained"
          type="submit"
          value="open"
          onClick={(e) => sendMessage(e)}
          disabled={disabledButton === "open" ? true : false}
          size="large"
        >
          Open
        </Button>
        <Button
          variant="contained"
          type="submit"
          value="close"
          color="error"
          onClick={(e) => sendMessage(e)}
          disabled={disabledButton === "close" ? true : false}
          size="large"
        >
          Close
        </Button>
        <Button
          variant="contained"
          type="submit"
          value="R1ON"
          onClick={(e) => sendMessage(e)}
          disabled={disabledButton === "R1ON" ? true : false}
          size="large"
        >
          R1ON
        </Button>
        <Button
          variant="contained"
          type="submit"
          value="R1OFF"
          color="error"
          onClick={(e) => sendMessage(e)}
          disabled={disabledButton === "R1OFF" ? true : false}
          size="large"
        >
          R1OFF
        </Button>
        <Button
          variant="contained"
          type="submit"
          value="R2ON"
          onClick={(e) => sendMessage(e)}
          disabled={disabledButton === "R2ON" ? true : false}
          size="large"
        >
          R2ON
        </Button>
        <Button
          variant="contained"
          type="submit"
          value="R2OFF"
          color="error"
          onClick={(e) => sendMessage(e)}
          disabled={disabledButton === "R2OFF" ? true : false}
          size="large"
        >
          R2OFF
        </Button>
      </div>
    </>
  );
}

export default Buttons;
