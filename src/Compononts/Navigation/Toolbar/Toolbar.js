import React from 'react';

import { BsSearch, BsCart3, BsPerson } from 'react-icons/bs';

import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../NavigationItems/SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../../Logo/Logo';

const Toolbar = (props) => {
  return (
    <header className='flex items-center justify-between | lg:px-3 md:px-2 px-1 | min-h-[48px] box-border shadow-md'>
      <DrawerToggle clicked={props.drawerToggleClicked} />

      <div className='flex '>
        <Logo />

        <nav className='md:inline-block hidden'>
          <NavigationItems />
        </nav>
      </div>

      <div className='flex gap-x-5 justify-center items-center cursor-pointer'>
        <div className='md:inline-block hidden'>Login/Signup</div>
        <BsPerson className='md:hidden inline-block' />
        <BsSearch />
        <BsCart3 className='text-orange-300' />
      </div>
    </header>
  );
};

export default Toolbar;
