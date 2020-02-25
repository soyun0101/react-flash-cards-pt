import React from 'react';

function Nav(props){
    return (
        <nav>
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