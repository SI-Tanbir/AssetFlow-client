import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { Pie } from 'react-chartjs-2'; // Ensure react-chartjs-2 and chart.js are installed
import Chart from 'chart.js/auto';

const HRHomePage = () => {
  const [pendingRequests, setPendingRequests] = useState([]);
  const [topRequestedItems, setTopRequestedItems] = useState([]);
  const [limitedStockItems, setLimitedStockItems] = useState([]);
  const [pieChartData, setPieChartData] = useState(null); // Initialize as null
  const [announcements, setAnnouncements] = useState([]);
  const [trainings, setTrainings] = useState([]);

  const pieChartRef = useRef(null); // Ref for the Pie chart

  // Fake data
  const fakePendingRequests = [
    { id: 1, assetName: 'MacBook Pro', requester: 'Alice' },
    { id: 2, assetName: 'Office Chair', requester: 'Bob' },
  ];

  const fakeTopRequestedItems = [
    { id: 1, assetName: 'Laptop', count: 20 },
    { id: 2, assetName: 'Monitor', count: 15 },
  ];

  const fakeLimitedStockItems = [
    { id: 1, assetName: 'Projector', quantity: 5 },
    { id: 2, assetName: 'Whiteboard Marker', quantity: 8 },
  ];

  const fakePieChartData = {
    labels: ['Returnable', 'Non-returnable'],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  const fakeAnnouncements = [
    { id: 1, title: 'Quarterly Meeting', date: '2024-02-10' },
    { id: 2, title: 'New Office Opening', date: '2024-03-01' },
  ];

  const fakeTrainings = [
    { id: 1, title: 'Cybersecurity Training', date: '2024-01-20' },
    { id: 2, title: 'Project Management Workshop', date: '2024-02-15' },
  ];

  useEffect(() => {
    // Load fake data
    setPendingRequests(fakePendingRequests);
    setTopRequestedItems(fakeTopRequestedItems);
    setLimitedStockItems(fakeLimitedStockItems);
    setPieChartData(fakePieChartData);
    setAnnouncements(fakeAnnouncements);
    setTrainings(fakeTrainings);
  }, []);

  useEffect(() => {
    // Cleanup chart if it exists
    if (pieChartRef.current && pieChartRef.current.chartInstance) {
      pieChartRef.current.chartInstance.destroy();
    }
  }, [pieChartData]); // Re-run whenever pieChartData changes

  return (
    <div className="p-6 space-y-6 grid grid-cols-2 gap-12">
      {/* Pending Requests */}
      <Card>
        <CardHeader title={<Typography variant="h6">⏳ Pending Requests</Typography>} />
        <CardContent>
          {pendingRequests.slice(0, 5).map((request) => (
            <div key={request.id} className="mb-4">
              <Typography>{request.assetName}</Typography>
              <Typography variant="caption" color="textSecondary">
                Requested by: {request.requester}
              </Typography>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Top Requested Items */}
      <Card>
        <CardHeader title={<Typography variant="h6">📈 Top Requested Items</Typography>} />
        <CardContent>
          {topRequestedItems.slice(0, 4).map((item) => (
            <div key={item.id} className="mb-4">
              <Typography>{item.assetName}</Typography>
              <Typography variant="caption" color="textSecondary">
                Requests: {item.count}
              </Typography>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Limited Stock Items */}
      <Card>
        <CardHeader title={<Typography variant="h6">⚠️ Limited Stock Items</Typography>} />
        <CardContent>
          {limitedStockItems.map((item) => (
            <div key={item.id} className="mb-4">
              <Typography>{item.assetName}</Typography>
              <Typography variant="caption" color="textSecondary">
                Quantity: {item.quantity}
              </Typography>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Pie Chart */}
      <Card>
        <CardHeader title={<Typography variant="h6">📊 Returnable vs Non-returnable</Typography>} />
        <CardContent>
          {pieChartData ? (
            <Pie ref={pieChartRef} data={pieChartData} />
          ) : (
            <Typography color="textSecondary">Loading chart...</Typography>
          )}
        </CardContent>
      </Card>

      {/* Announcements */}
      <Card>
        <CardHeader title={<Typography variant="h6">📢 Announcements</Typography>} />
        <CardContent>
          {announcements.map((announcement) => (
            <div key={announcement.id} className="mb-4">
              <Typography>{announcement.title}</Typography>
              <Typography variant="caption" color="textSecondary">
                Date: {announcement.date}
              </Typography>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Trainings */}
      <Card>
        <CardHeader title={<Typography variant="h6">🎓 Upcoming Trainings</Typography>} />
        <CardContent>
          {trainings.map((training) => (
            <div key={training.id} className="mb-4">
              <Typography>{training.title}</Typography>
              <Typography variant="caption" color="textSecondary">
                Date: {training.date}
              </Typography>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default HRHomePage;
