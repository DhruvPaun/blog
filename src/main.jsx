import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from "./components/Pages/Home.jsx"
import { Provider } from 'react-redux'
import {store} from "./app/store.js"
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import AllPost from "./components/Pages/AllPost.jsx"
import Protected from './components/Protected.jsx'
import Signup from './components/Signup.jsx'
import AddForm from "./components/Pages/AddForm.jsx"
import Post from "./components/Pages/Post.jsx"
import EditPost from './components/Pages/EditPost.jsx'
import Login from './components/Login.jsx'
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:(
          <Protected authentication={false}>
              <Home/>
          </Protected>
        )
      },
      {
        path:"/login",
        element:(
          <Protected authentication={false}>
              <Login/>
          </Protected>
        )
      },
      {
        path:"/signup",
        element:(
          <Protected authentication={false}>
            <Signup/>
          </Protected>
        )
      },{
      path:"/edit-post/:slug",
      element:(
        <Protected authentication>
          <EditPost/>
        </Protected>
      )
      },{
        path:"/all-post",
        element:(
          <Protected authentication>
            <AllPost/>
          </Protected>
        )
      },{
        path:"/add-post",
        element:(
          <Protected authentication>
            <AddForm/>
          </Protected>
        )
      },{
        path:"/post/:slug",
        element:(
            <Post/>
        )
      }
      
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router}></RouterProvider>
  </Provider>
)
