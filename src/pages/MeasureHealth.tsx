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
  IonToolbar, IonInput } from '@ionic/react';
  import { thermometerSharp } from 'ionicons/icons';
  import React, { useState } from 'react';
  import ActionCard from '../components/ActionCard';

const MeasureHealth: React.FC = () => {
  const [valuePulse, setPulseValue] = useState<number>(0);
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
          <IonLabel position="floating">Pulse rate</IonLabel>
          <IonInput required min="40" max="140" type="number" value={valuePulse} placeholder="must be between 40 and 140" onIonChange={e => setPulseValue(parseInt(e.detail.value!, 0))}></IonInput>
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

        {/* If rules above don't result in Covid positive show this card */}
        <ActionCard />

        {/* If rules above do result in Covid positive show this message */}
        {/* Option 2: Call 111 */}

      </IonContent>

    </IonPage>
  );
};

export default MeasureHealth;
