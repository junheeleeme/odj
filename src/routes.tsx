import Home from './Pages/Home/index'
import Menu1 from './Pages/Menu1/index'

interface routeType {
  id: string
  title: string
  path: string
  element: React.ReactElement
}

export const routes: Array<routeType> = [
  { id: '0', title: 'Home', path: '/', element: <Home /> },
  { id: '1', title: 'Menu1', path: '/menu1', element: <Menu1 /> },
]
