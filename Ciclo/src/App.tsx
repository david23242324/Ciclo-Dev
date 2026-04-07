import { useState } from 'react'
import LoginScreen from './LoginScreen'
import LoadingScreen from './LoadingScreen'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return loaded
    ? <LoginScreen />  
    : <LoadingScreen onFinish={() => setLoaded(true)} />
}

