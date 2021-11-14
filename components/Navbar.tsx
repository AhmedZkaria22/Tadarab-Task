import React, { useRef } from 'react';
import DropItem from './NavbarComps/DropItem';
import AppBar from '@mui/material/AppBar';
import SearchItem  from './NavbarComps/SearchItem';
import Link from 'next/link';
import { Badge } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Navbar = () => {
  const menuRef = useRef<HTMLDivElement | undefined | any>(null);
  const menuOpRef = useRef<HTMLOrSVGElement | undefined | any>(null);
  const menuClRef = useRef<HTMLOrSVGElement | undefined | any>(null);  
  return (
    <AppBar>
      <img src='/Images/TadarabLg.png' alt='logo'/>
      <DropItem />
      <SearchItem />
      <Link href="/"> تدرب للشركات </Link>
      <Link href="/"> انضم كمدرب </Link>
      <Link href="/"> حساب جديد </Link>
      <Link href="/"> تسجيل دخول </Link>
      <Badge badgeContent={2} color="error">
        <img src='/Icons/cart.png' alt='cart' />
      </Badge>

      <section id='headerPhone'>
        <div className="hdsmtop">
          <MenuRoundedIcon id='phoneMenuIcon' ref={menuOpRef} onClick={ () => {
            menuRef.current.style.display = 'flex';
            menuOpRef.current.style.display = 'none';
            menuClRef.current.style.display = 'block';
          } }/>
          <CloseRoundedIcon id='phoneMenuIconClose' ref={menuClRef} onClick={ () => {
            menuRef.current.style.display = 'none';
            menuOpRef.current.style.display = 'block';
            menuClRef.current.style.display = 'none';
          } }/>
          <img src='/Images/TadarabLg.png' alt='logo'/>
          <Badge badgeContent={2} color="error">
            <img src='/Icons/cart.png' alt='cart' />
          </Badge>
        </div>
        <SearchItem/>
        <div id='phoneMenu' ref={menuRef}>
          <Link href="/"> تدرب للشركات </Link>
          <Link href="/"> انضم كمدرب </Link>
          <Link href="/"> حساب جديد </Link>
          <Link href="/"> تسجيل دخول </Link>
          <DropItem />
        </div>
      </section>

    </AppBar>
  )
}

export default Navbar;