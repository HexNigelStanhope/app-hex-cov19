import { IonButton, IonList, IonIcon } from '@ionic/react';
import React from 'react';
import './ExploreContainer.css';
import { navigation } from '../navigation';
import { arrowForward } from 'ionicons/icons';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonList>
      {navigation.map((navigation) =>
        <IonButton  expand="full" key={navigation.id} routerLink={`${navigation.id}`}>{navigation.title}
        <IonIcon slot="end" icon={arrowForward} />
        </IonButton>
      )}
    </IonList>
  );
};

export default ExploreContainer;
