import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>HexCov19 | Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <h3>Ring your GP/NHS 111 as soon as possible if:</h3>

      <ul className="warning-list">
          <li>You slowly start feeling more unwell or more breathless for two or more hours. </li>
          <li>You are having difficulty breathing when getting up to go to the toilet or similar.</li>
          <li>You sense that something is wrong (general weakness, extreme tiredness, loss of appetite, reduced urine output, unable to care for yourself – simple tasks like washing and dressing or making food).</li>
      </ul>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
