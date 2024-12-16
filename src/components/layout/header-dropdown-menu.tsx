import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


function HeaderDropdownMenu() {
  return (
    <div>
      <DropdownMenu>
      <DropdownMenuTrigger>
        <RxHamburgerMenu className={'w-8 h-8 cursor-pointer'}/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={'-translate-x-1/3'}>
        <DropdownMenuLabel>Phong Kha</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Tài khoản</DropdownMenuItem>
        <DropdownMenuItem className='lg:hidden'>Sản phẩm</DropdownMenuItem>
        <DropdownMenuItem>Giỏ hàng</DropdownMenuItem>
        <DropdownMenuItem>Đăng xuất</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    </div>
  )
}

export default HeaderDropdownMenu
