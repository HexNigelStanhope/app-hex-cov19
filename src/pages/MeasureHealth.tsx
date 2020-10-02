import {
  IonButton,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonPage,
  IonRange,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar, IonInput } from '@ionic/react';
  import { thermometerSharp } from 'ionicons/icons';
  import React, { useState } from 'react';
  import ActionCard from '../components/ActionCard';
  import './MeasureHealth.css';

const MeasureHealth: React.FC = () => {
  const [valuePulse, setPulseValue] = useState<number>(0);
  const [valueOxygen, setOxygenValue] = useState<number>(0);
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
          <IonInput required min="40" max="200" type="number" value={valuePulse} placeholder="must be between 40 and 200" onIonChange={e => setPulseValue(parseInt(e.detail.value!, 1))}></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Oxygen saturation</IonLabel>
          <IonSelect value={valueOxygen} placeholder="between 70% - 100%" okText="Confirm" cancelText="Dismiss" onIonChange={e => setOxygenValue(e.detail.value as number)}>
            <IonSelectOption value="70">70</IonSelectOption>
            <IonSelectOption value="71">71</IonSelectOption>
            <IonSelectOption value="72">72</IonSelectOption>
            <IonSelectOption value="73">73</IonSelectOption>
            <IonSelectOption value="74">74</IonSelectOption>
            <IonSelectOption value="75">75</IonSelectOption>
            <IonSelectOption value="76">76</IonSelectOption>
            <IonSelectOption value="77">77</IonSelectOption>
            <IonSelectOption value="78">78</IonSelectOption>
            <IonSelectOption value="79">79</IonSelectOption>
            <IonSelectOption value="80">80</IonSelectOption>
            <IonSelectOption value="81">81</IonSelectOption>
            <IonSelectOption value="83">83</IonSelectOption>
            <IonSelectOption value="84">84</IonSelectOption>
            <IonSelectOption value="85">85</IonSelectOption>
            <IonSelectOption value="86">86</IonSelectOption>
            <IonSelectOption value="87">87</IonSelectOption>
            <IonSelectOption value="88">88</IonSelectOption>
            <IonSelectOption value="89">89</IonSelectOption>
            <IonSelectOption value="90">90</IonSelectOption>
            <IonSelectOption value="91">91</IonSelectOption>
            <IonSelectOption value="93">93</IonSelectOption>
            <IonSelectOption value="94">94</IonSelectOption>
            <IonSelectOption className="safe-saturation" value="95">95</IonSelectOption>
            <IonSelectOption className="safe-saturation" value="96">96</IonSelectOption>
            <IonSelectOption className="safe-saturation" value="97">97</IonSelectOption>
            <IonSelectOption className="safe-saturation" value="98">98</IonSelectOption>
            <IonSelectOption className="safe-saturation" value="99">99</IonSelectOption>
            <IonSelectOption className="safe-saturation" value="100">100</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Temperature</IonLabel>
          <IonRange min={35} max={41} pin={true} snaps={true} step={1} value={valueTemperature} onIonChange={e => setTemperatureValue(e.detail.value as number)}>
            <IonIcon size="small" slot="start" icon={thermometerSharp} />
            <IonIcon slot="end" icon={thermometerSharp} />
          </IonRange>
        </IonItem>

        <IonItemDivider>Your Selections</IonItemDivider>
          <IonItem>
            <IonLabel>Pulse rate: {valuePulse}</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Oxygen saturation: {valueOxygen}</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Temperature: {valueTemperature}</IonLabel>
          </IonItem>


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
