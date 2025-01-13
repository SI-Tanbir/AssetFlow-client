import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import baseUrl from '../../Hooks/baseUrlAxiosInstance';

const PendingEmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch pending employees
    baseUrl.get('/pending-employee') // Adjust URL if necessary
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error('Error fetching pending employees:', error);
      });
  }, []);

  return (
    <TableContainer component={Paper} sx={{ marginTop: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Full Name</strong></TableCell>
            <TableCell><strong>Email</strong></TableCell>
            <TableCell><strong>Position</strong></TableCell>
            <TableCell><strong>Company</strong></TableCell>
            <TableCell><strong>Status</strong></TableCell>
            <TableCell><strong>Request Date</strong></TableCell>
            <TableCell><strong>Actions</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee._id.$oid}>
              <TableCell>{employee.fullName}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.position}</TableCell>
              <TableCell>{employee.company}</TableCell>
              <TableCell>{employee.status}</TableCell>
              <TableCell>{new Date(employee.requestDate).toLocaleDateString()}</TableCell>
              <TableCell>
                <button
                  onClick={() => handleApprove(employee._id.$oid)}
                  style={{ marginRight: '10px', backgroundColor: 'green', color: 'white', padding: '5px 10px' }}
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(employee._id.$oid)}
                  style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px' }}
                >
                  Reject
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  function handleApprove(id) {
    console.log('Approving employee:', id);
    // Add approve logic here
  }

  function handleReject(id) {
    console.log('Rejecting employee:', id);
    // Add reject logic here
  }
};

export default PendingEmployeeList;
