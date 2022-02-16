import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Header.css';

export default function Header() {
  return ( 
    <div className="Header">
      <div className="Nav CENTER">
        <Link className="Link" to="/">Code Breaker</Link>
        &nbsp;|&nbsp;
        <Link className="Link" to="/about">About</Link>
      </div>
    </div>
  )
}
