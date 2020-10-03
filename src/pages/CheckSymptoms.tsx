import {
  IonButton,
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
  IonItemDivider,
} from "@ionic/react";
import React, { useState } from "react";
import ActionCard from "../components/ActionCard";
import { PatientContext } from "../App";
import symptomsUtils from "../pageLogic/symptomsUtils";
import logic from "../pageLogic/symptomsLogic";

const CheckSymptoms: React.FC = (props) => {
  const patientData = React.useContext(PatientContext);
  const [showOption, setShowOption] = useState(
    symptomsUtils.cardDisplayOptions.NONE
  );

  const togglePatientDecision = (arrayIndex) => {
    //Update global questions array with the checked values during a click event.
    let newAnswerValue =
      patientData.covidQuestions[arrayIndex].answer === false ? true : false;
    patientData.covidQuestions[arrayIndex].answer = newAnswerValue;
  };

  const showOptionCardDisplay = () => {
    setShowOption(logic.diagnoseSymptomsAndReturnDisplayOption(patientData));
  };

  const hideOptionCardDisplay = () => {
    if (showOption !== symptomsUtils.cardDisplayOptions.NONE)
      setShowOption(symptomsUtils.cardDisplayOptions.NONE);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>HexCov19 | Check Symptoms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonList>
          <IonItemDivider>
            Some text to explain what this is about
          </IonItemDivider>
          {patientData.covidQuestions.map(({ val, answer }, i) => (
            <IonItem key={i}>
              <IonLabel>{val}</IonLabel>
              <IonCheckbox
                slot="end"
                color="danger"
                value={val}
                checked={answer}
                onClick={() => {
                  hideOptionCardDisplay();
                  togglePatientDecision(i);
                }}
              />
            </IonItem>
          ))}
        </IonList>

        <IonButton
          expand="full"
          onClick={() => {
            showOptionCardDisplay();
          }}
        >
          Continue
        </IonButton>
        {/* If rules above don't result in Covid positive show this card */}
        <ActionCard showOption={showOption} />

        {/* If rules above do result in Covid positive show this message */}
        {/* Option 2: Call 111 */}
      </IonContent>
    </IonPage>
  );
};

export default CheckSymptoms;
