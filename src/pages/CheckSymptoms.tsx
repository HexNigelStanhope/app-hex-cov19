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

const checkboxList = [
  { val: 'a high temperatue', isChecked: false },
  { val: 'a new cough', isChecked: false },
  { val: 'a loss or change to your sense of smell or taste', isChecked: false },
  { val: 'shortness of breath', isChecked: false }
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
          <IonItemDivider>Some text to explain what this is about</IonItemDivider>
          {checkboxList.map(({ val, isChecked }, i) => (
            <IonItem key={i}>
              <IonLabel>{val}</IonLabel>
              <IonCheckbox slot="end" color="danger" value={val} checked={isChecked} />
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default CheckSymptoms;
