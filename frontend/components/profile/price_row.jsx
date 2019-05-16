import React from "react";

class PriceRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current_price: this.props.price,
            current_vacancies: this.props.vacancies
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInput(e) {
        this.setState({ current_price: e.target.value });
    }

    handleSubmit(e){
        e.preventDefault();
    }

    render(){
        console.log(this.props);
        return(
            <tr>
                <td>{this.props.date}</td>
                <td>
                    <input 
                        type="number" 
                        value={this.state.current_price} 
                        onChange={this.handleInput.bind(this)}
                    />
                </td>
                <td>
                    <button>Submit New Price</button>
                </td>
                <td>
                    <input
                        type="number"
                        value={this.state.vacancies}
                        onChange={this.handleInput.bind(this)}
                    />
                    <button>Change Room Vacancy</button>
                </td>
            </tr>
        )
    }

}

export default PriceRow;