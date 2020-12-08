import React from 'react'

import { Cards, CountryPicker } from './components'
import { fetchData, fetchFirstCountries } from './api'


class App extends React.Component {
    state = {
        data:{},dataCountry:{},countries: '',
    };
    async componentDidMount() {
        const fetchedData = await fetchData()
        this.setState({ data: fetchedData })
        const Countries = await fetchFirstCountries()
        const Data = await fetchData(Countries)
        this.setState({ dataCountry: Data,countries:Countries})
    }
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        this.setState({ dataCountry: fetchedData, country: country })
    };


    render() {
        return (
            <div>
                <Cards data={this.state.data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Cards data={this.state.dataCountry} country={this.state.country}/>
            </div>
        )
    };
};

export default App