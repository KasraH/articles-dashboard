import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { action as registerAction, Register } from './views/Register'
import { action as loginAction, Login } from './views/Login'
import { loader as rootLoader, Dashboard } from './views/Dashboard'
import { loader as articleLoader, Articles } from './views/Articles'
import { action as destroyAction } from './views/DestroyArticle'
import { action as createAction, CreateArticle } from './views/CreateArticle'
import {
  action as editAction,
  loader as editLoader,
  EditArticle,
} from './views/EditArticle'
import './translation'
const router = createBrowserRouter([
  {
    path: '/',
    loader: rootLoader,
    element: <Dashboard />,
    children: [
      {
        loader: articleLoader,
        path: 'articles',
        element: <Articles />,
      },
      {
        action: createAction,
        path: 'articles/create',
        element: <CreateArticle />,
      },
      {
        loader: editLoader,
        action: editAction,
        path: 'articles/:slug/edit',
        element: <EditArticle />,
      },
      {
        path: 'articles/:articleId/destroy',
        action: destroyAction,
      },
      {
        loader: articleLoader,
        path: 'articles/page/:page',
        element: <Articles />,
      },
    ],
  },
  {
    path: '/register',
    action: registerAction,
    element: <Register />,
  },
  {
    path: '/login',
    action: loginAction,
    element: <Login />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
