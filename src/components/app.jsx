import React from 'react';

import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import CreateCard from './create-card';
import Nav from './nav';

class App extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            view: 'view-cards',
            cards: []
        }

        this.setView = this.setView.bind(this);
        this.getView = this.getView.bind(this);
        this.saveCards = this.saveCards.bind(this);
        this.addCard = this.addCard.bind(this);
    }

    setView(changeView){
        
        return this.setState({
            view: changeView
        })
    }

    getView(){
       
        const currentView = this.state.view;

        switch(currentView){
            case 'create-card':
                return <CreateCard addCard={this.addCard} />;
            case 'review-card':
                return <ReviewCards />;
            case 'view-cards':
                return <ViewCards />;
            default:
                return null;
        }
    }

    saveCards(){
        const stringedCards = JSON.stringify(this.state.cards);
        const storeCards = window.localStorage;
        storeCards.setItem({flashCards: stringedCards});
    }

    addCard(cardObject){
        console.log('cardobject is: ', cardObject);
        const cardsArray = this.state.cards.slice();
        const newSetCards = cardsArray.push(cardObject);
        console.log(cardsArray);
        console.log('in addCard: ', newSetCards);
        this.setState({
            cards: cardsArray
        });
        this.saveCards();
    }

    render(){
        console.log('Cards From App: ', this.state.cards);
        return(
            <div>
                <Nav setView={this.setView}/>
                {this.getView()}
            </div>
        )
    }
}

export default App;