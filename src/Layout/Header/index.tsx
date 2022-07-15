import { Box, List, ListItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Heading } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import { routes } from '../../routes'

const Header = () => {
  return (
    <Box as="header" display="flex" justifyContent="space-between" height="60px" p="2">
      <Heading as="h1" size="md" display="flex" justifyContent="center" alignItems="center">
        <Link to="/">Logo</Link>
      </Heading>
      <Box as="div" display="flex">
        <List display="inline-flex" width="500px" justifyContent="flex-start" alignItems="center">
          {routes.map((r) => (
            <ListItem key={r.id} mr="20px" p="1">
              <Link to={r.path}>{r.title}</Link>
            </ListItem>
          ))}
        </List>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Box>
    </Box>
  )
}

export default Header
