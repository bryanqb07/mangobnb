import React from 'react';
import * as DateUtil from '../../util/date_api_util';
import DatePicker from 'react-date-picker';
import { withRouter } from 'react-router-dom';
import photos_reducer from '../../reducers/photos_reducer';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.today = new Date();
        this.tomorrow = DateUtil.getFollowingDate(this.today);
        this.state = {
            startDate: this.today,
            endDate: this.tomorrow,
            numGuests: 1,
            errors: []
        };
        this.MAX_GUESTS = 4;
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleChange(e) {
        this.setState({ numGuests: e.target.value });
    }

    handleDateChange(type) {
        if(type === "startDate"){ //allows auto-updating of end date
                                //when new start date selected
            return (e) =>  this.setState({
                [type]: e ,
                endDate: DateUtil.getFollowingDate(e) });
        }else{
            return (e) => this.setState({ [type]: e });
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const errors = this.errorCheck();
        if (errors.length > 0){
            this.setState({ errors: errors });
        }else{
            let query_params = `num_guests=${this.state.numGuests}`;
            query_params += `&start_date=${this.state.startDate.toDateString()}`;
            query_params += `&end_date=${this.state.endDate.toDateString()}`;

            this.props.history.push({
                pathname: "/booking",
                search: query_params
            });
        }
    }

    errorCheck(){
        let errors = [];
        if (this.state.numGuests === "-- Guests --" || !this.state.numGuests) {
            errors.push("Number of guests cannot be blank.");
        }
        if(this.state.startDate > this.state.endDate){
            errors.push("Check-in date must precede check-out date.");
        }

        return errors;
    }


    render() {
        const errors = this.state.errors ? (
            this.state.errors.map(error => <div className="search-warning" key ={error}>
                {error}</div>) ) : "";

        const imgStyle = {
          minWidth: "1000px",
          width: "1500px",
          height: "800px"
        }

        const headerStyle = {
          maxWidth: '1500px'
        }
        const rowPadding = {
          margin: "0 -16px"
        }

        const pickerStyle = {
          border: "1px solid white"
        }

        return (
            <header className="w3-display-container w3-content" style={headerStyle}>
            <img className="w3-image" src={window.photos.photoUrls[0]} alt="The Hotel" style={imgStyle} />
                <div className="w3-display-left w3-padding w3-col l6 m8">
                  <div className="w3-container w3-yellow">
                    <h2><i className="fa fa-bed w3-margin-right"></i>Mango Station</h2>
                  </div>
                  <div className="w3-container w3-white w3-padding-16">
                    <form onSubmit={this.handleSubmit.bind(this)} >
                      <div className="w3-row-padding" style={rowPadding}>
                        <div className="w3-half w3-margin-bottom">
                          <label><i className="fa fa-calendar-o"></i> Check In</label>
                          <DatePicker 
                          className="w3-input w3-border" style={pickerStyle} name="CheckIn" required 
                          minDate={this.today}
                          value={this.state.startDate}
                          onChange={this.handleDateChange("startDate")}
                          style={{ border: none }}
                          />
                      </div>
                          <div className="w3-half">
                            <label><i className="fa fa-calendar-o"></i> Check Out</label>
                            <DatePicker 
                              className="w3-input w3-border" type="date" name="CheckOut" required 
                              value={this.state.endDate}
                              minDate={this.tomorrow}
                              onChange={this.handleDateChange("endDate")}
                              style={{border: none}}
                              />
                              
          </div>
                          </div>
                          <div className="w3-row-padding" style={rowPadding}>
                            <div className="w3-half w3-margin-bottom">
                              <label><i className="fa fa-male"></i> Guests</label>
                              <input 
                                    value={this.state.numGuests}
                                    onChange={this.handleChange}
                                    className="w3-input w3-border" type="number" name="Guests" min="1" max={this.MAX_GUESTS} 
                              />                        
          
          </div>
                              </div>
                              <button className="w3-button w3-dark-grey" type="submit"><i className="fa fa-search w3-margin-right"></i> Search availability</button>
      </form>
                          </div>
                          {errors ? (<div>
                            <ul>
                              {errors}
                            </ul>
                          </div>) : ""}
                        </div>
                        </header>
          )
          }
    }


            export default withRouter(SearchBar);
