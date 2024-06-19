import React from 'react'
import { Card,Row,Col,Image, Button } from 'react-bootstrap'
import './AssessmentCard.css'
import file from '../../assets/file.png'
import lady from '../../assets/lady.png'
function AssessmentCard() {
  return (
   <>
     <Card className='card-cls text-light' >
          <Card.Body>
          <Row>
            <Col className='m-4'>
                    <div className='text-center' style={{width:'90px',height:'90px',background:'white'}}>
                        <Image className='mt-3' src={file} style={{width:'50px',height:'60px'}}/>
                    </div>
            </Col>
            <Col >
                <Image src={lady} style={{width:'80px',height:'80px'}} />
                <div className='position-relative'>
                <Image src={lady} className='pos-cls' style={{width:'200px',height:'200px'}} />
                </div>
            </Col>
            <Row>
                    <Col className='ms-4'>
                        <div style={{fontSize:'23px',}}><b>0033</b></div>
                        <p>New Assessment's</p>
                    </Col>
                    <Col className='text-end mt-3 ms-5'>
                        <Button className='bg-white text-dark'>VIEW DETAILS</Button>
                    </Col>
            </Row>
          </Row>
          </Card.Body>
        </Card>
   </>
  )
}

export default AssessmentCard