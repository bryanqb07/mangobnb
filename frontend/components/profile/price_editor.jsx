import React from 'react';
import DatePicker from "react-date-picker";
import * as DateUtil from "../../util/date_api_util";
// import { postRestriction } from "../../util/restriction_api_util"; 

class PriceEditor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            price: 1000,
            net_vacancies: 0,
            room_id: 1,
            startDate: new Date(),
            endDate: DateUtil.getFollowingDate(new Date())
        };
        // this.GUEST_CAPACITY = 4;
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.updatePrices = this.updatePrices.bind(this);
        this.updateVacancies = this.updateVacancies.bind(this);
    }

    handleDateChange(type) {
        if (type === "startDate") { //allows auto-updating of end date 
            //when new start date selected
            return (e) => this.setState({
                [type]: e,
                endDate: DateUtil.getFollowingDate(e)
            });
        } else {
            return (e) => this.setState({ [type]: e });
        }
    }

    handleChange(e) {
        this.setState({ room_id: e.target.value });
    }

    disableButton(e){
        let targetButton = e.currentTarget;
        targetButton.disabled = true;
        targetButton.innerHTML = "&#10003"; // targetButton
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     disableButton(e);
    //     // let targetButton = e.currentTarget;
    //     // // targetButton.disabled = true;
    //     // targetButton.innerHTML = "&#10003"; // targetButton
    // }

    updateVacancies(e) {
        e.preventDefault();
        const net_vacancies = {
            start_date: this.state.startDate.toDateString(),
            end_date: this.state.endDate.toDateString(),
            net_vacancies: this.state.net_vacancies,
            room_id: this.state.room_id
        };
        this.props.postRestriction(net_vacancies);
        this.disableButton(e);
    }

    updatePrices(e) {
        e.preventDefault();
        const price = {
            start_date: this.state.startDate.toDateString(),
            end_date: this.state.endDate.toDateString(),
            price: this.state.price,
            room_id: this.state.room_id
        };
        // console.log(price);
        this.props.postPrices(price);
        this.disableButton(e);
    }

    handleInput(type) {
        return e => this.setState({ [type]: e.target.value });
    }

    render(){
        return (
          <div className="price-editor-menu">
              <span>Start Date</span>
              <DatePicker
                className="picker admin-picker"
                value={this.state.startDate}
                onChange={this.handleDateChange("startDate")}
              />
              <span>End Date</span>
              <DatePicker
                className="right-picker picker admin-picker"
                value={this.state.endDate}
                onChange={this.handleDateChange("endDate")}
              />
              <span>Room Type</span>
              <select name="" id="" className="form-fix" onChange={this.handleChange.bind(this)}>
                <option value="1">Mixed Room</option>
                <option value="2">Females Only Room</option>
              </select>
              <span>New Price</span>
              <input
                type="number"
                value={this.state.price}
                onChange={this.handleInput("price")}
                min="0"
                className="form-fix"
              />
              <button className="search-button"　onClick={this.updatePrices}>Update Prices</button>
                <span>Adjust Vacancies (+)(-)</span>
              <input
                type="number"
                value={this.state.net_vacancies}
                onChange={this.handleInput("net_vacancies")}
                min="-4"
                className="form-fix"
              />
              <button className="search-button" onClick={this.updateVacancies}>
                Update Vacancies
              </button>
          </div>
        );
    }

}

export default PriceEditor;