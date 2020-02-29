import React from 'react';


class CreateCard extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            question: '',
            answer: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleChange(e){

        const target= e.target;

        if(target.name === 'question'){
            this.setState({
                question: target.value
            });
        }
        if(target.name === 'answer'){
            this.setState({
                answer: target.value
            });
        }
    }

    handleSubmit(e){
        e.preventDefault();

        this.props.addCard({
            question: this.state.question,
            answer: this.state.answer
        });

        return this.reset();
    }

    reset(){

        this.props.setView('view-cards');

        return this.setState({
            question: '',
            answer: ''
        });

    }

    render(){

        return <form className="container" onSubmit={this.handleSubmit}>
        <h1 className="text-center mt-2 mb-5">Create New Card</h1>
    
        <div className="input-group mb-5">
            <div className="input-group-prepend">
                <span className="input-group-text">Question</span>
            </div>
            <textarea className="form-control" aria-label="With textarea" onChange={this.handleChange} name="question" id="question"></textarea>
            </div>
            <div className="input-group mb-5">
            <div className="input-group-prepend">
                <span className="input-group-text">Answer</span>
            </div>
            <textarea className="form-control" aria-label="With textarea" onChange={this.handleChange} name="answer" id="answer"></textarea>
            </div>
        <button className="btn btn-outline-danger float-right" type="reset" onClick={this.reset}>Cancel</button>
        <button className="btn btn-outline-success float-right mr-2" type="submit">Save Card</button>
    </form>
    }


}
export default CreateCard;