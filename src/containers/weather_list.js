import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';



class WeatherList extends Component {

    renderWeather(cityData) {
        const temps = cityData.list.map((weather) => {
            return weather.main.temp;
        })
        const pressure = cityData.list.map((weather) => {
            return weather.main.pressure;
        })
        const humidity = cityData.list.map((weather) => {
            return weather.main.humidity;
        })
        return (
            <tr key={cityData.city.name}>
                <td>{cityData.city.name}</td>
                <td><Chart data={temps} color='red'/></td>
                <td><Chart data={pressure} color='orange'/></td>
                <td><Chart data={humidity} color='blue'/></td>
            </tr>
        )
    }

    render() {
        console.log(this.props.weather)
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>temp</th>
                        <th>Pressure</th>
                        <th>Humidty</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return {weather : state.weather}
}

export default connect(mapStateToProps)(WeatherList);
