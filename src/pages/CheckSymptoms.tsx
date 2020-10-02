import {
  IonButtons,
  IonBackButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCheckbox,
  IonList,
  IonItem,
  IonLabel,
  IonItemDivider } from '@ionic/react';
import React from 'react';
//import ActionCard from '../components/ActionCard';
import Continue from '../components/Continue';

const checkboxList = [
  { val: 'a high temperature', desc:'a high temperature - this means you feel hot to touch on your chest or back (you do not need to measure your temperature)' ,  isChecked: false },
  { val: 'a new cough', desc: 'this means coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours (if you usually have a cough, it may be worse than usual)', isChecked: false },
  { val: 'a loss or change to your sense of smell or taste', desc: 'this means you have noticed you cannot smell or taste anything, or things smell or taste different to normal', isChecked: false },
  { val: 'shortness of breath', desc: 'uncomfortable feeling of being out of breath', isChecked: false }
];
 
const CheckSymptoms: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start"><IonBackButton /></IonButtons>
          <IonTitle>HexCov19 | Check Symptoms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonList>
        <IonItemDivider></IonItemDivider>
          <IonItemDivider>Please make sure you are resting for at least 5 minutes before taking your readings.</IonItemDivider>
          <IonItemDivider></IonItemDivider>
          {checkboxList.map(({ val, desc, isChecked }, i) => (
            
              <IonItem key={i}>
              <IonLabel>{val} <h3>{desc}</h3></IonLabel> 
              <IonCheckbox slot="end" color="danger" value={val} checked={isChecked} />
            </IonItem>
          ))}
        </IonList>
 
        {/* instead of continue, we should have Measure your health  */}

        <Continue/>

        {/* If rules above don't result in Covid positive show this card */}
        {/* <ActionCard /> */}

        {/* If rules above do result in Covid positive show this message */}
        {/* Option 2: Call 111 */}

      </IonContent>
    </IonPage>
  );
};

export default CheckSymptoms;
