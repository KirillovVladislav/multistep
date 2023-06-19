import { Routes, Route } from 'react-router-dom'

import { CreatePage } from './pages/CreatePage/CreatePage'
import { MainPage } from './pages/MainPage/MainPage'

import { ERoutes } from './shared/types/enums'

import s from './App.module.scss'

const App = () => (
  <div className={s.app}>
    <Routes>
      <Route element={<MainPage />} path={ERoutes.MAIN} />
      <Route element={<CreatePage />} path={ERoutes.CREATE} />
    </Routes>
  </div>
)

export default App
