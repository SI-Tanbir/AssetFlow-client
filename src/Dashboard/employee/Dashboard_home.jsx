import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

const EmployeeDashboard = () => {
  // Fake data for temporary use
  const fakeUserInfo = {
    id: 1,
    name: 'John Doe',
    companyId: '12345',
  };

  const fakePendingRequests = [
    {
      id: 1,
      assetName: 'MacBook Pro',
      assetType: 'Returnable',
      requestDate: '2024-01-10',
    },
    {
      id: 2,
      assetName: 'Office Chair',
      assetType: 'Returnable',
      requestDate: '2024-01-12',
    },
  ];

  const fakeMonthlyRequests = [
    {
      id: 3,
      assetName: 'Notebook Set',
      status: 'approved',
    },
    {
      id: 4,
      assetName: 'Wireless Mouse',
      status: 'pending',
    },
  ];

  const fakeNotices = [
    {
      id: 1,
      title: 'Holiday Announcement',
      content: 'The office will remain closed on January 15th for a public holiday.',
      date: '2024-01-10',
    },
    {
      id: 2,
      title: 'New Policy Update',
      content: 'Please review the updated remote work policy effective from February.',
      date: '2024-01-09',
    },
  ];

  // State management
  const [pendingRequests, setPendingRequests] = useState(fakePendingRequests);
  const [monthlyRequests, setMonthlyRequests] = useState(fakeMonthlyRequests);
  const [userInfo, setUserInfo] = useState(fakeUserInfo);
  const [date, setDate] = useState(new Date());
  const [notices, setNotices] = useState(fakeNotices);

  if (!userInfo?.companyId) {
    return (
      <div className="min-h-screen p-6">
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-yellow-500">⚠️</span>
            </div>
            <Typography variant="h5" className="font-bold mb-2">No Company Affiliation</Typography>
            <Typography color="textSecondary">
              You are currently not affiliated with any company. Please contact your HR department to get started.
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Pending Requests Section */}
      <Card>
        <CardHeader
          title={<Typography variant="h6">⏳ My Pending Requests</Typography>}
        />
        <CardContent>
          {pendingRequests.length === 0 ? (
            <Typography color="textSecondary">No pending requests</Typography>
          ) : (
            pendingRequests.map((request) => (
              <div key={request.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg mb-2">
                <div>
                  <Typography variant="body1" className="font-medium">{request.assetName}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Requested on: {new Date(request.requestDate).toLocaleDateString()}
                  </Typography>
                </div>
                <Typography variant="caption" color="primary">{request.assetType}</Typography>
              </div>
            ))
          )}
        </CardContent>
      </Card>

      {/* Monthly Requests Section */}
      <Card>
        <CardHeader
          title={<Typography variant="h6">📅 My Monthly Requests</Typography>}
        />
        <CardContent>
          {monthlyRequests.length === 0 ? (
            <Typography color="textSecondary">No requests this month</Typography>
          ) : (
            monthlyRequests.map((request) => (
              <div key={request.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg mb-2">
                <div>
                  <Typography variant="body1" className="font-medium">{request.assetName}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Status: {request.status}
                  </Typography>
                </div>
                <Typography variant="caption" color={request.status === 'approved' ? 'success' : 'error'}>
                  {request.status}
                </Typography>
              </div>
            ))
          )}
        </CardContent>
      </Card>

      {/* Notices Section */}
      <Card>
        <CardHeader
          title={<Typography variant="h6">📢 Recent Notices</Typography>}
        />
        <CardContent>
          {notices.length === 0 ? (
            <Typography color="textSecondary">No new notices</Typography>
          ) : (
            notices.map((notice) => (
              <div key={notice.id} className="p-3 bg-gray-50 rounded-lg mb-2">
                <Typography variant="subtitle1" className="font-medium">{notice.title}</Typography>
                <Typography variant="body2" color="textSecondary">{notice.content}</Typography>
                <Typography variant="caption" color="textSecondary">
                  {new Date(notice.date).toLocaleDateString()}
                </Typography>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployeeDashboard;
