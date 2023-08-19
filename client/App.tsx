import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from 'react-router-dom'

import Layout from './components/Layout'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Home from './components/Home'

  function App(){
    return (
        <RouterProvider
        router={createBrowserRouter(
            createRoutesFromElements(
                <Route path="/" element={<Layout/>}>
                  <Route index element={<Home />} />
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Route>
            )
        )}
        />
    )
  }

  export default App