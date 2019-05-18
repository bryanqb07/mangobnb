import React from 'react';
import DatePicker from "react-date-picker";
import * as DateUtil from "../../util/date_api_util";

class PriceEditor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            price: 1000,
            vacancy: 0,
            startDate: new Date(),
            endDate: DateUtil.getFollowingDate(new Date())
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(e) {
        e.preventDefault();
        let targetButton = e.currentTarget;
        // targetButton.disabled = true;
        targetButton.innerHTML = "&#10003"; // targetButton
    }

    handleInput(type) {
        return e => this.setState({ [type]: e.target.value });
    }

    render(){
        return (
          <div>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <DatePicker
                className="left-picker picker admin-picker"
                value={this.state.startDate}
                onChange={this.handleDateChange("startDate")}
              />
              <DatePicker
                className="right-picker picker admin-picker"
                value={this.state.endDate}
                onChange={this.handleDateChange("endDate")}
              />
              <select name="" id="">
                <option value="1">Mixed Room</option>
                <option value="2">Females Only Room</option>
              </select>
              <span>New Price</span>
              <input
                type="number"
                value={this.state.price}
                onChange={this.handleInput("price")}
                min="0"
              />
              <button className="search-button">Update Prices</button>
              <span>New Vacancy</span>
              <input
                type="number"
                value={this.state.vacancy}
                onChange={this.handleInput("vacancy")}
                min="0"
              />
              <button className="search-button">
                Update Vacancies
              </button>
            </form>
          </div>
        );
    }

}

export default PriceEditor;