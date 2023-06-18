import { Routes, Route } from 'react-router-dom'

import s from './App.module.scss'
import { CreatePage } from './pages/CreatePage/CreatePage'
import { MainPage } from './pages/MainPage/MainPage'
import { ERoutes } from './shared/types/enums'

const App = () => (
  <div className={s.app}>
    <Routes>
      <Route element={<MainPage />} path={ERoutes.MAIN} />
      <Route element={<CreatePage />} path={ERoutes.CREATE} />
    </Routes>
  </div>
)

export default App
