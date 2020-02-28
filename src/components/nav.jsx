import React from 'react';

function Nav(props){
    return (
        <nav className="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
        <ul className="nav nav-pills">
            <li className="nav-item">
                <span onClick={() => props.setView('view-cards')} className="nav-link">View Cards</span>
            </li>
            <li className="nav-item">
                <span onClick={() => props.setView('review-card')} className="nav-link">Review</span>
            </li>
            <li className="nav-item">
                <span onClick={() => props.setView('create-card')} className="nav-link">Create Card</span>
            </li>
        </ul>
        </nav>
    );
}

export default Nav;