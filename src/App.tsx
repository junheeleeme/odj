import Header from './Layout/Header'
import Footer from './Layout/Footer'
import { Box } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'

export const App = () => (
  <Box height="100vh">
    <Header />
    <Box as="main" height="calc(100vh - 100px)" p="10px">
      <Routes>
        {routes.map((r) => (
          <Route key={r.id} path={r.path} element={r.element} />
        ))}
      </Routes>
    </Box>
    <Footer />
  </Box>
)
