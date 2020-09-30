import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle
} from '@ionic/react';

interface HexCardProps { }

const HexCard: React.FC<HexCardProps> = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>
          Option 1: You are unlikely to have coronavirus
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </IonCardContent>
    </IonCard>
  )
}

export default HexCard;