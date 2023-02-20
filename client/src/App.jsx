import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout } from "./layouts"
import { Home } from "./pages/Home"
import { Artworks } from "./pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/artworks", element: <Home /> },
      { path: "/artworks/:id", element: <Home /> },
      { path: "/messages", element: <Home /> },
      { path: "/messages/:id", element: <Home /> },
      { path: "/orders", element: <Home /> },
      { path: "/", element: <Home /> },
    ],
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
