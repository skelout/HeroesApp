import { Navigate, Route, Routes } from "react-router"

import { LoginPage } from "../auth/pages/LoginPage"
import { DcPage } from "../heroes/pages/DCPage"
import { MarvelPage } from "../heroes/pages/MarvelPage"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='marvel' element= {<MarvelPage />} />

            <Route path='dc' element= {<DcPage />} />

            <Route path='login' element= {<LoginPage />} />

            <Route path='/' element= {<Navigate to='/marvel' />} />

        </Routes>
    </>
  )
}