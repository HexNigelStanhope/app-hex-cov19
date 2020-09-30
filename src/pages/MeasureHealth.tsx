import {
  IonButton,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRange,
  IonTitle,
  IonToolbar } from '@ionic/react';
  import { thermometerSharp } from 'ionicons/icons';
  import React, { useState } from 'react';

const MeasureHealth: React.FC = () => {
  const [valuePulse, setPulseValue] = useState(0);
  const [valueOxygen, setOxygenValue] = useState(0);
  const [valueTemperature, setTemperatureValue] = useState(0);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start"><IonBackButton /></IonButtons>
          <IonTitle>Measure your health</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" fullscreen>
        <IonItem>
          <IonLabel position="stacked">Pulse rate</IonLabel>
          <IonRange min={40} max={140} pin={true} snaps={true} step={1}value={valuePulse} onIonChange={e => setPulseValue(e.detail.value as number)}>
            <IonLabel slot="start">40</IonLabel>
            <IonLabel slot="end">140</IonLabel>
          </IonRange>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Oxygen saturation</IonLabel>
          <IonRange min={70} max={100} pin={true} snaps={true} step={1} value={valueOxygen} onIonChange={e => setOxygenValue(e.detail.value as number)}>
            <IonLabel slot="start">70%</IonLabel>
            <IonLabel slot="end">100%</IonLabel>
          </IonRange>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Temperature</IonLabel>
          <IonRange min={35} max={41} pin={true} snaps={true} step={1} value={valueTemperature} onIonChange={e => setTemperatureValue(e.detail.value as number)}>
            <IonIcon size="small" slot="start" icon={thermometerSharp} />
            <IonIcon slot="end" icon={thermometerSharp} />
          </IonRange>
        </IonItem>

        <IonList>
          <IonItem>
            <IonLabel>Pulse rate: {valuePulse}</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Oxygen saturation: {valueOxygen}</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Temperature: {valueTemperature}</IonLabel>
          </IonItem>
        </IonList>

        <IonButton expand="full">Submit</IonButton>

      </IonContent>

    </IonPage>
  );
};

export default MeasureHealth;
