import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRecoilValue } from 'recoil'
import { jobsAtom, messagesAtom, networkAtom, notificationAtom, totalNotifcationselector } from './atoms'

function App() {
   const networkCount = useRecoilValue(networkAtom)
   const jobsCount = useRecoilValue(jobsAtom)
   const messagesCount = useRecoilValue(messagesAtom)
   const noticicationCount = useRecoilValue(notificationAtom)
   const totalCount = useRecoilValue(totalNotifcationselector)
  return (
    <>
    <button>Home</button>
    <button>Network ({networkCount})</button>
    <button>Jobs ({jobsCount})</button>
    <button>Messages ({messagesCount})</button>
    <button>Notifications ({noticicationCount})</button>
    <button>Me ({totalCount})</button>
    </>
  )
}

export default App
