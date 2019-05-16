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

    handleInput(type) {
        return e => this.setState({ [type]: e.target.value });
    }

    handleSubmit(e){
                     e.preventDefault();
                     let targetButton = e.currentTarget;
                     // targetButton.disabled = true;
                     targetButton.innerHTML = "&#10003"; // targetButton
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
                        onClick={this.handleSubmit}>Update</button>
            </td>
            <td>
                <input
                    type="number"
                    value={this.state.current_vacancies}
                    onChange={this.handleInput("current_vacancies").bind(this)}
                    min="0"
                />
                <button className="table-button"
                    onClick={this.handleSubmit}>Update</button>
            </td>
          </tr>
        );
    }

}

export default PriceRow;