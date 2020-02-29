import React from 'react';

export class EachCard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            
            <div className="col mb-4">
            <div className="card bg-light mb-3" style={{maxWidth: "18rem"}}>
            {/* <div className="card-header">Header</div> */}
            <div className="card-body">
                <h5 className="card-title">Question:</h5>
                <p className="card-text">{this.props.eachCard.question}</p>
                <h5 className="card-title">Answer:</h5>
                <p className="card-text">{this.props.eachCard.answer}</p>
            </div>
            </div>
            
        </div>
        )
    }
}

class ViewCards extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        
        return <div>
                <h1 className="text-center mt-2 mb-2">My Cards</h1>
                <div className="container">
                <div className="row row-cols-1 row-cols-md-3">
                {this.props.currentCards.map((eachCard, index) => 

                {
                return  <EachCard key={index} eachCard={eachCard}/>
                
                })
                }
                </div>
                </div>
                </div>
        
    
    }
}

export default ViewCards;