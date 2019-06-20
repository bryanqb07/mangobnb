import React from "react";

class PriceRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current_price: this.props.price,
            net_vacancies: this.props.vacancies
        };
        this.handlePriceSubmit = this.handlePriceSubmit.bind(this);
        this.handleVacancySubmit = this.handleVacancySubmit.bind(this);
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

        let restriction = {
            restriction_date: this.props.date,
            net_vacancies: (this.state.net_vacancies - this.props.vacancies),
            room_id: this.props.room_id
        };

        this.props.postRestriction(restriction);
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
                    value={this.state.net_vacancies}
                    onChange={this.handleInput("net_vacancies").bind(this)}
                />
                <button className="table-button"
                    onClick={this.handleVacancySubmit.bind(this)}>Update</button>
            </td>
          </tr>
        );
    }

}

export default PriceRow;