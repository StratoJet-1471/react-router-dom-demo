import React from 'react';
import { Outlet, Link } from "react-router-dom";

export function Main() {
    return (
        <>
        <div className='main__top-navbar'>
            <span className='main__top-nav-description'>SHIPS:</span>
            <nav>
                <Link className="main__top-nav-link" to="/cruiser">Cruiser</Link> |{" "}
                <Link className="main__top-nav-link" to="/destroyer">Destroyer</Link>
            </nav>
        </div>
        <Outlet/>
        </>
    );
  }
  
 