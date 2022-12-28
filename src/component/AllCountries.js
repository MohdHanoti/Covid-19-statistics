import axios from 'axios';
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



export class AllCountries extends Component {
    constructor(props){
        super(props);
        this.state={
            summaryList:[],
            
        }

    }
    componentDidMount=()=>{
        axios
        .get('http://127.0.0.1:8000/api/v1/covid/summary/')
        .then(result=>{

            this.setState({
                summaryList:result.data.Countries
            })
            
        }).catch(err=>{
          console.log(err)
        })

    }
    handelClick=(item)=>{
        let obj={
            Country:item.Country,
            Confirmed:item.TotalConfirmed,
            Deaths:item.TotalDeaths,
            Recovered:item.TotalRecovered,
            Date:item.Date


        }
        axios.post(`http://127.0.0.1:8000/api/v1/covid/`,obj)

    }
  render() {
    return (<>
      <h3 className='all_countries_text'>COVID-19 Statistics For All countries</h3>
      <Row xs={1} md={4} className="g-4">
      {this.state.summaryList.map((item) => (
        <Col>

          <Card className='card3' >
            <div className='for_row'>
                <div className='for_col'></div>
                <div className='card4'>
                    <h4 className='for_date'>Country:{item.Country}</h4>
                    <p> Total confirmed Cases:{item.TotalConfirmed}</p>
                    <p> Total Deaths Cases:{item.TotalDeaths}</p>
                    <p> Total Recovered Cases:{item.TotalRecovered}</p>
                    <p> Date:{item.Date}</p>
                    <button className='bton' onClick={()=>this.handelClick(item)}>ADD TO MY RECORDS</button>

              
            </div>
            </div>
          </Card>

        </Col>
      ))}
    </Row>



      </>
    )
  }
}

export default AllCountries