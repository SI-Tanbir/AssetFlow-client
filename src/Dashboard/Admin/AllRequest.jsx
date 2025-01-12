import React, { useState } from 'react';
import { TextField, Button, Box, Container, Typography, Paper, Grid, Card, CardContent, CardActions } from '@mui/material';

const AllRequestsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [requests, setRequests] = useState([
    // Fake Data for Request List
    {
      id: 1,
      assetName: 'MacBook Pro',
      assetType: 'Laptop',
      requesterName: 'Alice Smith',
      requesterEmail: 'alice@domain.com',
      requestDate: '2025-01-10',
      additionalNote: 'Urgent request',
      status: 'Pending',
    },
    {
      id: 2,
      assetName: 'Office Chair',
      assetType: 'Furniture',
      requesterName: 'Bob Johnson',
      requesterEmail: 'bob@domain.com',
      requestDate: '2025-01-11',
      additionalNote: 'New office setup',
      status: 'Pending',
    },
    // Add more requests here
  ]);

  // Filter requests by search term
  const filteredRequests = requests.filter((request) =>
    request.requesterName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.requesterEmail.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle approve action
  const handleApprove = (id) => {
    console.log('Approved request with ID:', id);
    // Update request status to 'Approved'
    setRequests(prevRequests =>
      prevRequests.map(request =>
        request.id === id ? { ...request, status: 'Approved' } : request
      )
    );
  };

  // Handle reject action
  const handleReject = (id) => {
    console.log('Rejected request with ID:', id);
    // Update request status to 'Rejected'
    setRequests(prevRequests =>
      prevRequests.map(request =>
        request.id === id ? { ...request, status: 'Rejected' } : request
      )
    );
  };

  

  return (
    <Container maxWidth="lg" sx={{ padding: '20px' }}>
      {/* Search Section */}
      <Box mb={3} display="flex" justifyContent="center">
        <TextField
          label="Search by Name or Email"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ maxWidth: '600px' }}
        />
      </Box>

      {/* Request List Section */}
      <Grid container spacing={3}>
        {filteredRequests.map((request) => (
          <Grid item xs={12} sm={6} md={4} key={request.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {request.assetName}
                </Typography>
                <Typography variant="body2">Asset Type: {request.assetType}</Typography>
                <Typography variant="body2">Requester: {request.requesterName}</Typography>
                <Typography variant="body2">Email: {request.requesterEmail}</Typography>
                <Typography variant="body2">Request Date: {request.requestDate}</Typography>
                <Typography variant="body2">Additional Note: {request.additionalNote}</Typography>
                <Typography variant="body2">Status: {request.status}</Typography>
              </CardContent>
              <CardActions>
                {request.status === 'Pending' && (
                  <>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => handleApprove(request.id)}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleReject(request.id)}
                    >
                      Reject
                    </Button>
                  </>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllRequestsPage;
