import { IonButton, IonList, IonIcon } from '@ionic/react';
import React from 'react';
import './ExploreContainer.css';
import { navigation_continue } from '../navigation_continue';
import { arrowForward } from 'ionicons/icons';

interface ContainerProps { }

const Continue: React.FC<ContainerProps> = () => {
  return (
    <IonList>
      {navigation_continue.map((navigation_continue) =>
        <IonButton  expand="full" key={navigation_continue.id} routerLink={`${navigation_continue.id}`}>{navigation_continue.title}
         <IonIcon slot="right" icon={arrowForward} />
        </IonButton> 

      )}
    </IonList>
  );
};
export default Continue;
