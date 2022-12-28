import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './css/SpesificStatistics.css'
import axios from 'axios'

export class SpesificStatistics extends Component {

    constructor(props){
        super(props);
        this.state={
            localList:[],
            flage:false
        }

    }
    handelSubmit=(event)=>{
      event.preventDefault()

        let country=event.target.country.value;
        let from=new Date(event.target.from.value);
        from=from.toISOString()
        let to =new Date(event.target.to.value);
        to=to.toISOString()
        axios
        .get(`http://127.0.0.1:8000/api/v1/covid/local/?country=${country}&from=${from}&to=${to}`)
        .then(result=>{

        
        this.setState({
            localList:result.data,
            flage:true
        })

        })
    }

  render() {
    return (<>
      <h3 id='Search'>Search For a specific country</h3>
      
      <Form className='countryForm' onSubmit={this.handelSubmit}>
      <Form.Group className="mb-3" >
      <Form.Label className='Labels'> Country Name: </Form.Label>  
        <Form.Control type="Text" placeholder="EX:Jordan"  name='country' />
      </Form.Group>

      <Form.Group className="mb-3" >
      <Form.Label className='Labels'> From: </Form.Label> 
        <Form.Control type="date"   name='from'/>
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Label className='Labels'> To: </Form.Label> 
        <Form.Control type="date"  name='to'/>
      </Form.Group>
      <Button variant="primary" type="submit" className='btn btn-danger'>
        Get Statistics
      </Button>
    </Form>
    
    {this.state.flage &&
    <Row xs={1} md={4} className="g-4">
      {this.state.localList.map((data) => (
        <Col >
          <Card className='card3' >
            <div className='for_row'>
                <div className='for_col'></div>
                <div className='card2'>
                    <p className='for_date'>Date:{data.Date}</p>
                    <p> Number of confirmed Cases:{data.Cases}</p>
              
            </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  }

    </>
    )
  }
}

export default SpesificStatistics