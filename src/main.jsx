import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './assets/Component/Navbar/Navbar.jsx'
import Blogs from './assets/Component/Blogs/Blogs.jsx'
import Bookmarks from './assets/Component/Bookmarks/Bookmarks.jsx'
import RealHome from './assets/Component/ReallHome/RealHome.jsx'
import Another from './assets/Component/AnotherBook/Another.jsx'
import Content from './assets/Component/Content/Content.jsx'
import Author from './assets/Component/Author/Author.jsx'
import { Toaster } from 'react-hot-toast';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar></Navbar>,
    children: [
      {
        path: '/reallhome',
        element: <RealHome></RealHome>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
        loader: () => fetch('https://dev.to/api/articles?per page=20&top=7')

      },
      {
        path: '/Bookmark',
        element: <Bookmarks></Bookmarks>
      },
      {
        path: '/bookmarkanother/:rh',
        element: <Another></Another>,
        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.rh}`),
        children: [
          {
            index: true,
            element: <Content></Content>,
            loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.rh}`),
          },
          {
            path: 'author',
            element: <Author></Author>,
            loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.rh}`),
          }
        ]
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    < Toaster></Toaster>
  </StrictMode>,
)
