import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonTabs,
} from "@ionic/react";
import { callSharp as phoneIcon } from "ionicons/icons";
import { home } from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import MeasureHealth from "./pages/MeasureHealth";
import CheckSymptoms from "./pages/CheckSymptoms";
import utils from "./pageLogic/pageUtils";
import symptomsUtils from "./pageLogic/symptomsUtils.js";
import symptomsLogic from "./pageLogic/symptomsLogic";

export const PatientContext = React.createContext({
  covidQuestions: symptomsUtils.checkboxList,
  pulse: 0,
  oxygenSaturation: 70,
  temperature: 0,
});

const App: React.FC = () => {
  const [patientData] = useState({
    covidQuestions: symptomsUtils.checkboxList,
    pulse: 0,
    oxygenSaturation: 70,
    temperature: 0,
  });
  return (
    <IonApp>
      <PatientContext.Provider value={patientData}>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/home" component={Home} exact={true} />
              <Route
                path="/MeasureHealth"
                component={MeasureHealth}
                exact={true}
                symptomsLogic={symptomsLogic}
              />
              <Route
                path="/CheckSymptoms"
                component={CheckSymptoms}
                exact={true}
                symptomsLogic={symptomsLogic}
              />
              <Route exact path="/" render={() => <Redirect to="/home" />} />
            </IonRouterOutlet>

            <IonTabBar slot="bottom" onClick={utils.OpenDialerOnPhone}>
              {/* 
            Bug in Ionic tab which means a hyperlink ref to open the dialer app doesn't work.
            Either two options to fix.  
            1/ Open the dialer from the whole tab bar (chosen!) - This means removing the home button.
            or 2/ Open dialer by pressing either on 'call 111' text or the phone icon - this would cause a side
            effect because when the finger just misses the icon but can activate the tab making it light up but 
            nothing happens. - Not bothered which approach. NS

            <IonTabButton tab="home" href="/home">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton> */}

              <IonTabButton tab="call" href="/">
                <IonIcon icon={phoneIcon} />
                <IonLabel>Call 111</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </PatientContext.Provider>
    </IonApp>
  );
};

export default App;
