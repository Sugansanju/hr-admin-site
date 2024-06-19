import React, { useState } from 'react'
import { Button, Card, Col, Nav, Row } from 'react-bootstrap'
import './PostJob.css'
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import JobListCard from './JobListCard';
import java from '../../assets/java.png';
import python from '../../assets/python.png';
import angular from '../../assets/angular.png'
function PostJob() {
  const [jobList,setJobList]=useState([
    {
      logo:python,
      role:'Phython Developers',
      jobCode:'#001',
      grade:'Senior Developers',
      count:'200',
      colorCode:'#D9E4EF',
      textColorCode:'#0A66C2',
      range:'28%',
      updatedAt:'6 mins ago'
    },
    {
      logo:angular,
      role:'Angular Developers',
      jobCode:'#002',
      grade:'Senior Developers',
      count:'200',
      colorCode:'#73A1FB',
      textColorCode:'white',
      range:'28%',
      updatedAt:'6 mins ago'
    },
    {
      logo:java,
      role:'Java Developers',
      jobCode:'#003',
      grade:'Senior Developers',
      count:'200',
      colorCode:'#2F73A0',
      textColorCode:'white',
      range:'28%',
      updatedAt:'6 mins ago'
    },
    
  ]);

  return (
    <>
        <Card>
          <Row className='p-4'>
            <Col>
                <span className='post-text'> Posted Jobs </span>
                <span className='view-all'>View All</span>
            </Col>
            <Col>
            <div className="search-container">
              <div className="input-wrapper shadow">
                <input type="text" className="search-input" placeholder="Search" />
                <CiSearch className='search-icon'/>
              </div>
              <div className="button-wrapper">
                <Button className="search-button btn-light text-dark shadow">
                <IoFilter size={20} className='icon-clr'/>&nbsp;
                  Filter
                </Button>
              </div>
            </div>
            </Col>
          </Row>
          <Nav variant="tabs" defaultActiveKey="/home" className='nav-tab-cls'>
            <Nav.Item className='n-item'>
              <Nav.Link eventKey="link-0">Active Jobs</Nav.Link>
            </Nav.Item>
            <Nav.Item className='n-item'>
              <Nav.Link eventKey="link-1">Inactive Jobs</Nav.Link>
            </Nav.Item>
            <Nav.Item className='n-item'>
              <Nav.Link eventKey="link-2">
                Completed Jobs
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <JobListCard data={jobList}/>
        </Card>
    </>
  )
}

export default PostJob