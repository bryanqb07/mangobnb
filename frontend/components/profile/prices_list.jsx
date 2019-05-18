import React from 'react';
import DatePicker from "react-date-picker";
import * as DateUtil from "../../util/date_api_util";
import PriceRow from './price_row';
import PriceEditor from './price_editor';

class PricesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: DateUtil.getFollowingDate(new Date()), 
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const date = {
            start_date: this.state.startDate.toDateString(),
            end_date: this.state.endDate.toDateString()
        };
        this.props.getPrices(date);
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

    createDateTable(prices, rooms, room_id) {
      return Object.keys(rooms).length > 0 && Object.keys(prices).length > 0 ? (
        Object.keys(prices).map(date => (
          <PriceRow date={date}
            price={prices[date][room_id].price}
            vacancies={
              rooms[room_id].vacancies && rooms[room_id].vacancies[date] ? rooms[room_id].vacancies[date] : rooms[room_id].guest_capacity
            }
            key={date}
          />
        ))
      ) : (
        <tr>
          <td>n/a</td>
          <td>n/a</td>
          <td>n/a</td>
        </tr>
      );
    }

    render() {
        const prices = this.props.prices;
        const rooms = this.props.rooms

        let priceList1 = this.createDateTable(prices, rooms, 1)
        let priceList2 = this.createDateTable(prices, rooms, 2)

        return (
          <div className="bookings-wrapper">
            <h3>Prices & Vacancies for the Upcoming Week</h3>
            <div className="price-table-wrapper">
              <table className="bookings-list">
                <caption>Room 1</caption>
                <tbody>
                  <tr>
                    <th>Date</th>
                    <th>Price</th>
                    <th>Vacancies</th>
                  </tr>
                  {priceList1}
                </tbody>
              </table>

              <table className="bookings-list">
                <caption>Room 2</caption>
                <tbody>
                  <tr>
                    <th>Date</th>
                    <th>Price</th>
                    <th>Vacancies</th>
                  </tr>
                  {priceList2}
                </tbody>
              </table>
            </div>

            <div>
              <h3>Search for Prices & Vacancies by Date</h3>
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
                <button className="search-button">
                  Search
                </button>
              </form>
            </div>
            <div>
              <h3>Bulk edit prices & vacancies</h3>
              <PriceEditor />
            </div>
          </div>
        );
    }
}

export default PricesList;
