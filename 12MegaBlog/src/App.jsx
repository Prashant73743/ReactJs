import './App.css'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth.js"
import {login, logout} from "./store/authSlice"

function App() {
  
  const [loading, setLoading] = useState(true)// on
  const dispatch = useDispatch()

  // checking if we are logged in or out  
  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
       if(userData) {
        dispatch(login(userData))
       } else{
        dispatch(logout())
       }
    })
    .finally(() => setLoading(false))// off
  }, [])
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-amber-600'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App