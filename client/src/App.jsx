import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout } from "./layouts"
import { Home } from "./pages/Home"
import { Add } from "./pages/Add"
import { Artwork } from "./pages/Artwork"
import { Artworks } from "./pages/Artworks"
import { Message } from "./pages/Message"
import { Messages } from "./pages/Messages"
import { Orders } from "./pages/Orders"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/artworks", element: <Artworks /> },
      { path: "/artworks/:id", element: <Artwork /> },
      { path: "/messages", element: <Messages /> },
      { path: "/messages/:id", element: <Message /> },
      { path: "/orders", element: <Orders /> },
      { path: "/add", element: <Add /> },
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
