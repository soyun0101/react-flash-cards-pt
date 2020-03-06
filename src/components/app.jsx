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
        this.deleteCard = this.deleteCard.bind(this);
    }

    componentDidMount() {
        this.getCards();
    }

    setView(changeView){
        
        return this.setState({
            view: changeView
        })
    }

    deleteCard(){
       
        const card = this.state.activeCard;

        if(card) {
           
            let newCardsArray = this.state.cards.slice();
            newCardsArray.splice(card.index, 1);
            this.setState({
                cards: newCardsArray
            });
        }
        
    }

    getView(){
       
        const currentView = this.state.view;

        switch(currentView){
            case 'create-card':
                return <CreateCard addCard={this.addCard} setView={this.setView}/>;
            case 'review-card':
                return <ReviewCards activeCard={this.state.activeCard} cards={this.state.cards} setActiveCard={this.setActiveCard}/>;
            case 'view-cards':
                return <ViewCards activeCard={this.state.activeCard} currentCards={this.state.cards} deleteCard={this.deleteCard} setActiveCard={this.setActiveCard}/>;
            default:
                return null;
        }
    }

    getCards() {
        const cards = localStorage.getItem('flashCards');

        if(cards) {
            this.setState({
                cards: JSON.parse(cards)
            });
        }
    }

    saveCards(){
        const stringedCards = JSON.stringify(this.state.cards);
        const storeCards = window.localStorage;
        storeCards.setItem('flashCards', stringedCards);
    }

    addCard(cardObject){
        console.log(cardObject);
      
        const cardsArray = this.state.cards.slice();
        cardsArray.push(cardObject);
       
        this.setState({
            cards: cardsArray
        }, this.saveCards);
      
    }

    setActiveCard(index){
       
        if(typeof this.state.cards[index] !== 'undefined'){
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