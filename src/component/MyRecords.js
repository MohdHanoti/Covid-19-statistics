import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios'

export class MyRecords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Flage:true,
            flage:false,
            countryList:[]

        }
        
      }
      componentDidMount=()=>{
        axios.get('http://127.0.0.1:8000/api/v1/covid/')
        .then(reslut=>{
            this.setState({
                countryList:reslut.data,
              
            })
            

        })

      }
      handelClick= async (item)=>{
        
        await axios.delete(`http://127.0.0.1:8000/api/v1/covid/${item.id}`)
      }
  render() {
    return (<>
    <><h3 className='all_countries_text'>COVID19 Statistics For All countries</h3>
    <Row xs={1} md={4} className="g-4">
    {this.state.countryList.map((item) => (
      <Col>
        <Card className='card3' >
          <div className='for_row'>
              <div className='for_col'></div>
              <div className='card4'>
                  <h4 className='for_date'>Country:{item.Country}</h4>
                  <p> Date:{item.Date}</p>
                  <button className='btn btn-danger' onClick={()=>this.handelClick(item)}>DELETE</button>

            
          </div>
          </div>
        </Card>
      </Col>
    ))}
  </Row>
    </>
    

    </>
    )
  }
}

export default MyRecords