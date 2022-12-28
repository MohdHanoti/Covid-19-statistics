import SpesificStatistics from './SpesificStatistics'
import React, { Component } from 'react'
import axios from 'axios'
import './css/Home.css'

export class Home extends Component {
    constructor(props) {
        super(props);

        this.state={
            worldList:[],

        }
      }
  static propTypes = {}
  componentDidMount=()=>{
    axios
    .get(
      `http://127.0.0.1:8000/api/v1/covid/global/`)
      .then(result=>{
        
        this.setState({
            worldList:result.data
        })
          }).catch(err=>{
            console.log(err)
          })

}
  render() {
    return (
        <>
        <div className='TotalStatistics'>
        
    <h3 >COVID-19 Total Statistics</h3>
    <div className='titels'>
    <h5>Total Confirmed:</h5>
    <h5>Total Deaths:</h5>
    <h5>Total Recovered:</h5>
        
    </div>
    <div className='results'>
    <h6 className='result'>{this.state.worldList['TotalConfirmed']}</h6>
    <h6 className='result'>{this.state.worldList['TotalDeaths']}</h6>
    <h6 className='result'>{this.state.worldList['TotalRecovered']}</h6>
    </div>
    
    </div>
        
        <SpesificStatistics/>
        
        </>
    )
  }
}

export default Home