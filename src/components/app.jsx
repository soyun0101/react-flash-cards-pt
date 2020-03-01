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
            cards: [],
            activeCard: [],
        }

        this.setView = this.setView.bind(this);
        this.getView = this.getView.bind(this);
        this.saveCards = this.saveCards.bind(this);
        this.addCard = this.addCard.bind(this);
        this.setActiveCard = this.setActiveCard.bind(this);
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
                return <CreateCard addCard={this.addCard} setView={this.setView}/>;
            case 'review-card':
                return <ReviewCards activeCard={this.state.activeCard} cards={this.state.cards} setActiveCard={this.setActiveCard}/>;
            case 'view-cards':
                return <ViewCards currentCards={this.state.cards}/>;
            default:
                return null;
        }
    }

    saveCards(){
        const stringedCards = JSON.stringify(this.state.cards);
        const storeCards = window.localStorage;
        storeCards.setItem('flashCards', stringedCards);
    }

    addCard(cardObject){
      
        const cardsArray = this.state.cards.slice();
        cardsArray.push(cardObject);
       
        this.setState({
            cards: cardsArray
        }, this.saveCards);
      
    }

    setActiveCard(index){
       
        if(typeof this.state.cards[0] !== 'undefined'){
            const currentCards = this.state.cards.slice();
            let activeCard = currentCards[index];
            
            return this.setState({
                activeCard: {
                    question: activeCard.question,
                    answer: activeCard.answer,
                    index: index
                }
            })
        }
        
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