import React from "react";
import Action1Messsage from "./Action1Message";
import Action2Messsage from "./Action2Message";

const HexCard: React.FC = (props) => {
  if(props.showOption === 1)
  {
      return (
        <Action1Messsage></Action1Messsage>
      )
  }
  else if (props.showOption === 2)
  {
    return (
      <Action2Messsage></Action2Messsage>
    )
  }
  else{
    return <></>;
  }
};

export default HexCard;
