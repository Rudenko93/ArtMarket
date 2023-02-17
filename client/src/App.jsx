import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout } from "./layouts"
import { Home } from "./pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }],
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
