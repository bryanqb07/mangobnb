import React from "react";

class PriceRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current_price: this.props.price,
            current_vacancies: this.props.vacancies
        };
        this.handlePriceSubmit = this.handlePriceSubmit.bind(this);
    }

    handleInput(type) {
        return e => this.setState({ [type]: e.target.value });
    }

    handlePriceSubmit(e){
        e.preventDefault();
        let targetButton = e.currentTarget;
        targetButton.disabled = true;
        
        let newPrice = {
            price_date: this.props.date,
            price: this.state.current_price,
            room_id: this.props.room_id
        };
        
        this.props.postPrice(newPrice);
        targetButton.innerHTML = "&#10003";
        
    }

    handleVacancySubmit(e) {
        e.preventDefault();
        let targetButton = e.currentTarget;
        targetButton.disabled = true;

        let price = {
            price_date: this.props.date,
            price: this.state.current_price,
            room_id: this.props.room_id
        };

        this.props.postPrice(price);
        targetButton.innerHTML = "&#10003";
    }

    render(){
        return (
          <tr>
            <td>{this.props.date}</td>
            <td>
                <input
                    type="number"
                    value={this.state.current_price}
                    onChange={this.handleInput("current_price").bind(this)}
                    min="0"
                />
                <button className="table-button"
                        onClick={this.handlePriceSubmit.bind(this)}>Update</button>
            </td>
            <td>
                <input
                    type="number"
                    value={this.state.current_vacancies}
                    onChange={this.handleInput("current_vacancies").bind(this)}
                    min="0"
                />
                <button className="table-button"
                    onClick={this.handlePriceSubmit.bind(this)}>Update</button>
            </td>
          </tr>
        );
    }

}

export default PriceRow;