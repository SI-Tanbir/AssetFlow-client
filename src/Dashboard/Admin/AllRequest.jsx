import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Container, Grid, Card, CardContent, CardActions, Typography, Button, CircularProgress, Alert } from '@mui/material';
import baseUrl from '../../Hooks/baseUrlAxiosInstance';

const AllRequestsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await baseUrl.get('/request-items');
        console.log('Fetched Data:', response.data);
        setRequests(response.data);
      } catch (err) {
        console.error('Error fetching requests:', err);
        setError('Failed to load requests. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const filteredRequests = Array.isArray(requests)
    ? requests.filter((request) =>
        request.requesterName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.requesterEmail.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <Container maxWidth="lg" sx={{ padding: '20px' }}>
      <TextField
        label="Search by Name or Email"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ maxWidth: '600px', marginBottom: '20px' }}
      />

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <Grid container spacing={3}>
          {filteredRequests.map((request) => (
            <Grid item xs={12} sm={6} md={4} key={request._id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{request.assetName}</Typography>
                  <Typography>Type: {request.assetType}</Typography>
                  <Typography>Requester: {request.requesterName}</Typography>
                  <Typography>Email: {request.requesterEmail}</Typography>
                  <Typography>Date: {request.requestDate}</Typography>
                  <Typography>Status: {request.status}</Typography>
                </CardContent>
                <CardActions>
                  <Button color="success">Approve</Button>
                  <Button color="error">Reject</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default AllRequestsPage;
