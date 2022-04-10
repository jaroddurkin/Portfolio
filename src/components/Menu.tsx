import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { homeSharp, homeOutline, briefcaseSharp, briefcaseOutline, schoolOutline, schoolSharp, codeWorkingOutline, codeWorkingSharp, peopleOutline, peopleSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/page/home',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Experience',
    url: '/page/experience',
    iosIcon: briefcaseOutline,
    mdIcon: briefcaseSharp
  },
  {
    title: 'Education',
    url: '/page/education',
    iosIcon: schoolOutline,
    mdIcon: schoolSharp
  },
  {
    title: 'Projects',
    url: '/page/projects',
    iosIcon: codeWorkingOutline,
    mdIcon: codeWorkingSharp
  },
  {
    title: 'Contact',
    url: '/page/contact',
    iosIcon: peopleOutline,
    mdIcon: peopleSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Jarod Durkin</IonListHeader>
          <IonNote>jarod@durkin.app</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
