import React, { useMemo, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import CandidateTable from './CandidateTable';
import { IoEyeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
 import './CandidateTable.css'
function CandidateStatus() {
  const columns = [
    { Header: 'Job ID', accessor: 'id', className: 'column-id' },
    { Header: 'Name', accessor: 'name', className: 'column-name' },
    { Header: 'Position', accessor: 'position', className: 'column-position' },
    { Header: '1st Level', accessor: 'first', className: 'column-level' ,
      Cell: (row) => (
        <span className={getScore(row.first)}>
          {row.first === 'Not Scored' ? <RxCross2 /> : row.first}
        </span>
      ),
    },
    { Header: '2nd Level', accessor: 'second', className: 'column-level' ,
      Cell: (row) => (
        <span className={getScore(row.second)}>
          {row.second === 'Not Scored' ? <RxCross2 /> : row.second}
        </span>
      ), },
    { Header: '3rd Level', accessor: 'third', className: 'column-level' ,
      Cell: (row) => (
        <span className={getScore(row.third)}>
          {row.third === 'Not Scored' ? <RxCross2 /> : row.third}
        </span>
      ), },
    { Header: '4th Level', accessor: 'fourth', className: 'column-level'  ,
      Cell: (row) => (
        <span className={getScore(row.fourth)}>
          {row.fourth === 'Not Scored' ? <RxCross2 /> : row.fourth}
        </span>
      ),},
    { Header: 'Total Marks', accessor: 'marks', className: 'column-marks' },
    { Header: 'Status', accessor: 'status', className: 'column-status' ,
      Cell: (row) => (
        <span className={getStatusClass(row.status)}>{row.status}</span>
      ),
    },
    { Header: 'Actions', accessor: 'action', className: 'column-actions', 
      Cell: (row) => (
      <div>
        <IoEyeOutline />
      </div>
    ), },
  ];
  const data = [
    { id: '#001', name: 'John Doe', position: 'Python Developer', first: '7/10', second: '6/10', third: '7/10', fourth: '...', marks: '...', status: 'Active', action: '' },
    { id: '#002', name: 'Jane Smith', position: 'Designer', first: '8/10', second: '8/10', third: '5/10', fourth: '5/10', marks: '36/40', status: 'Hired', action: '' },
    { id: '#003', name: 'Mike Johnson', position: 'Angular Developer', first: '5/10', second: '5/10', third: '10/10', fourth: '...', marks: '...', status: 'Active', action: '' },
    { id: '#004', name: 'John Doe', position: 'IOS Developer', first: '5/10', second: '5/10', third: 'Not Scored', fourth: 'Not Scored', marks: '30/40', status: 'Reject', action: '' },
    { id: '#005', name: 'Jane Smith', position: 'React Developer', first: '7/10', second: '6/10', third: '7/10', fourth: '...', marks: '...', status: 'Active', action: '' },
    { id: '#006', name: 'Mike Johnson', position: 'Junior Developer', first: '7/10', second: '6/10', third: '7/10', fourth: '...', marks: '...', status: 'Active', action: '' },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'Active':
        return 'status-active';
      case 'Reject':
        return 'status-inactive';
      case 'Hired':
        return 'status-hired';
      default:
        return '';
    }
  };
  const getScore = (score) => {
    switch (score) {
      case 'Not Scored':
        return 'status-notscore';
      default:
        return '';
    }
  };
 

  return (
    <>
       <Card>
          <Row className='p-4'>
            <Col>
                <span className='post-text'> Candidate Status</span>
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
          <CandidateTable columns={columns} data={data}/>
          </Card>
    </>
  )
}

export default CandidateStatus