import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button
} from '@material-tailwind/react'

export default function UserAuth() {
  return (
    <Menu>
      <MenuHandler>
        <Button className="h-20 w-20 rounded-full bg-sky-100 text-black">
          User
        </Button>
      </MenuHandler>
      <MenuList className="border-t-indigo-500">
        <MenuItem>Contact Support</MenuItem>
        <MenuItem>Log Out</MenuItem>
      </MenuList>
    </Menu>
  )
}
