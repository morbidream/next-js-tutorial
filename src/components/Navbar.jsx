import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Navbar, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, NavbarBrand, NavbarText, UncontrolledDropdown, Container, Row, NavbarToggler, Collapse } from 'reactstrap'
import Logo from './unnamed.jpg'
export default function Navbarr() {

  return (
    // <nav>
    //     <h1>Tutorial </h1>
    //     <Link href="/">Home</Link>&nbsp;
    //     <Link href="/dashboard">Dashboard</Link>&nbsp;
    //     <Link href="/dashboard/user">User</Link>
    //     <br/>
    // </nav>
    <div>

        
     
    
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <Image
        src={Logo}
        alt="logo"
        width={50}
        quality={100}
        placeholder='blur'
        />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Tutorial</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/dashboard">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/dashboard/user">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/dashboard/tickets">Tickets</a>
        </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
       
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  </div>
  )
}
