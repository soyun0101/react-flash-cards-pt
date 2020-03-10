import React from 'react';

class Modal extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isOpen: false
        }

        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.confirm = this.confirm.bind(this);
    }

    close(){
        this.setState({
            isOpen: false
        });
    }

    confirm(e){
        if(typeof this.props.onConfirm === 'function'){
            this.props.onConfirm(e);
        }
        this.close();
    }

    open(){
        if(typeof this.props.onOpen === 'function') {
            this.props.onOpen();
        }
        this.setState({
            isOpen: true
        });
    }

    render(){

        if(this.state.isOpen){
            return(
                <React.Fragment>
                <div className="modal-container">
                    <div className="modal-content">
                        <p>Are you sure you want to delete this card?</p>
                    
                        <div className="text-right mr-2">
                            <button className="mr-2 btn btn-outline-danger" onClick={this.close}>Cancel</button>
                            <button className="mr-1 btn btn-outline-success" onClick={this.confirm}>Confirm</button>
                        </div>
                    </div>
                </div>
                <button className="btn btn-outline-info">Delete</button>
                </React.Fragment>
                
            );
        }
        else{
            return <button className="btn btn-outline-info" onClick={this.open}>Delete</button>
        }
       
    }
}

export default Modal;