import React from 'react';
import * as Util from '../../util/date_api_util';
import DatePicker from 'react-date-picker';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.today = Util.getCurrentDate();
        this.tomorrow = Util.getTomorrowsDate();
        this.state = {
            startDate: this.today,
            endDate: this.tomorrow,
            numGuests: null
        };
        this.GUEST_NUM = ["-- Guests --", 1, 2, 3, 4];
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleChange(e) {
        this.setState({ numGuests: e.target.value });
    }

    handleDateChange(type) {
        return (e) => this.setState({ [type]: e });
    }

    handleSubmit(e){
        e.preventDefault();
        
    }

    render() {
        console.log(this.state);
        return (
            <div className="search-form-container">
                <h1>Reservations</h1>
                <form>
                    <DatePicker
                        className="picker" 
                        minDate={this.today}
                        value={this.state.startDate} 
                        onChange={this.handleDateChange("startDate")}>   
                    </DatePicker>
                    <DatePicker 
                        className="picker"
                        value={this.state.endDate}
                        minDate={this.tomorrow} 
                        onChange={this.handleDateChange("endDate")}
                        />

                    <select value={this.numGuests} onChange={this.handleChange}> 
                        {
                            this.GUEST_NUM.map(num => <option value={num} key={num}>{num}</option>)
                        }
                    </select>
                    <button>Search</button>
                </form>
            </div>
        );
    }
}

export default withRouter(SearchBar);
