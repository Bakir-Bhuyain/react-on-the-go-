import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'



const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then (res=>res.json())

function App() {
  return (
    <>
     <div>
        <Suspense fallback={<p>nadir vhai loading</p>}> 
          <Countries countriesPromise={countriesPromise}></Countries>
        </Suspense>
     </div>
    </>
  )
}

export default App
