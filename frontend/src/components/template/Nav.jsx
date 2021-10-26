import './Nav.css'
import React, { Component } from 'react'
import NavItem from './NavItem'

const navHomeProps = {link: '', icon: 'home', name: 'home'}
const navUserProps = {link: 'users', icon: 'users', name: 'Usuários'}



export default class props extends Component {
render () {return (<aside className="menu-area">
 <nav className="menu">
    <NavItem {...navHomeProps}/>
    <NavItem {...navUserProps}/>
   

 </nav>

</aside>)}}
