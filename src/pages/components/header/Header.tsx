import { Link } from 'react-router-dom'
import React from "react";
import './header.css'

export default function Header():JSX.Element {
    return <header>
            <div className="logo">
                <div className="log"></div>
                <p>ApolloCode Studio</p>
            </div>
            <nav>
                <a href=''>Направления</a>
                <a href=''>Команда</a>
                <a href=''>Поддержка</a>
            </nav>
            <div className="telegadiscord">
                <a href=''><div></div></a>
                <a href=''><div></div></a>
            </div> 
    </header>
}