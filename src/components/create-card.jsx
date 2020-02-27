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
    }

    handleChange(e){

        const target= e.target;

        console.log(target.value);

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
    }

    render(){

        console.log('q: ', this.state.question);
        console.log('a: ', this.state.answer);
        return <form onSubmit={this.handleSubmit}>
        <h1>Create New Card</h1>
        <label htmlFor="question">
            Question:
            <div>
                <textarea onChange={this.handleChange} name="question" id="question" cols="70" rows="2"></textarea>
            </div>    
        </label>
        <label htmlFor="answer">
            Answer:
            <div>
                <textarea onChange={this.handleChange} name="answer" id="answer" cols="70" rows="2"></textarea>
            </div>   
        </label>
        <button>Cancel</button>
        <button type="submit">Save Card</button>
    </form>
    }




}
export default CreateCard;