import React from "react";
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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/MeasureHealth" component={MeasureHealth} exact={true} />
          <Route path="/CheckSymptoms" component={CheckSymptoms} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="call" href="/">
            <IonIcon icon={phoneIcon} onClick={() => window.open("tel:111")} />
            <IonLabel onClick={() => window.open("tel:111")}>Call 111</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
