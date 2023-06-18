import { MainForm } from './MainForm/MainForm';
import { Profile } from './Profile/Profile';

import s from './MainPage.module.scss';

export const MainPage = () => (
  <div className={s.wrapper}>
    <Profile />
    <MainForm />
  </div>
);
