import React from 'react';

class ReviewCards extends React.Component{
    constructor(props){
        super(props);

    this.state={
        isToggled: false,
    }

    this.handleToggle = this.handleToggle.bind(this);
    this.nextCard = this.nextCard.bind(this);
    this.displayFrontBack = this.displayFrontBack.bind(this);
    this.previousCard = this.previousCard.bind(this);
   
    }

    componentDidMount(){
        if(typeof this.props.cards[0] !== 'undefined'){
            this.props.setActiveCard(0);
        }  
    }

    handleToggle(){
        return this.setState({
            isToggled: !this.state.isToggled
        });
    }

    displayFrontBack(){
        
        if(this.state.isToggled){
            return <div className="card-body">
                        <h5 className="card-title">Answer:</h5>
                        <p className="card-text">{this.props.activeCard ? this.props.activeCard.answer : ''}</p>
                    </div>
        }
        else{
            return <div className="card-body">
                        <h5 className="card-title">Question:</h5>
                        <p className="card-text">{this.props.activeCard ? this.props.activeCard.question : ''}</p>
                    </div>
        }

    }

    
    nextCard(){

        this.setState({
            isToggled: false
        });

        const currentIndex = this.props.activeCard.index;
        
        const totalCards = this.props.cards.length;

        let nextIndex = currentIndex + 1;

        if(nextIndex >= totalCards){
            nextIndex = 0;
            this.props.setActiveCard(nextIndex);
        }
        else{
           return this.props.setActiveCard(nextIndex);
        }
      
    }

    previousCard(){
        
        this.setState({
            isToggled: false
        });
        
        const currentIndex = this.props.activeCard.index;
        
        const totalCards = this.props.cards.length;

        let previousIndex = currentIndex - 1;
      
        if(previousIndex < 0){
            previousIndex = totalCards - 1;
            this.props.setActiveCard(previousIndex);
        }
        else{
           return this.props.setActiveCard(previousIndex);
        }
        
    }

    render(){
      
        return (
            <div>
                <h1 className="text-center mt-2 mb-4">Review Cards</h1>
                <div className="d-flex justify-content-center">
                    <div className="card text-white bg-info mb-3" style={{width: "25rem", height: "15rem"}} onClick={this.handleToggle}>
                        {this.displayFrontBack()}
                   </div>
                 </div>
            
                 <div className="text-center">
                    <button onClick={this.previousCard} className="btn btn-primary mr-2">Previous Card</button>
                    <button onClick={this.nextCard} className="btn btn-primary" style={{width: "123px"}}>Next Card</button>
                 </div>
            </div>
        
        )
    }
}

export default ReviewCards;