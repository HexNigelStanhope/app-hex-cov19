import { IonItem, IonList } from "@ionic/react";
import React from "react";
import "./ExploreContainer.css";
import { navigation } from "../navigation";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonList>
      {navigation.map((navigation) => (
        <IonItem button key={navigation.id} routerLink={`${navigation.id}`}>
          {navigation.title}
        </IonItem>
      ))}
    </IonList>
  );
};

export default ExploreContainer;
