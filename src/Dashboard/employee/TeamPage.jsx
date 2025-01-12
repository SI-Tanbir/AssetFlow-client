import React, { useState, useEffect } from 'react';
import { Shield, User } from 'lucide-react';
import { Card, CardContent } from '@mui/material';

const MyTeamPage = () => {
  // Temporary fake data for team members
  const fakeTeamMembers = [
    {
      id: 1,
      name: 'Alice Johnson',
      role: 'admin',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Bob Smith',
      role: 'employee',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Charlie Brown',
      role: 'employee',
      image: null, // No image for this member
    },
  ];

  // State management
  const [teamMembers, setTeamMembers] = useState(fakeTeamMembers);
  const [isLoading, setIsLoading] = useState(false); // No loading since data is static
  const [error, setError] = useState(null); // No error for fake data

  /*
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/team-members');
        if (!response.ok) throw new Error('Failed to fetch team members');
        const data = await response.json();
        setTeamMembers(data);
        setError(null);
      } catch (err) {
        setError('Failed to load team members');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);
  */

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p>Loading team members...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px] text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Team</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <Card key={member.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="w-8 h-8 text-gray-400" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    {member.role === 'admin' ? (
                      <Shield className="w-4 h-4 text-blue-500" />
                    ) : (
                      <User className="w-4 h-4 text-gray-500" />
                    )}
                  </div>
                  <p className="text-sm text-gray-500 capitalize">{member.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {teamMembers.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>No team members found.</p>
        </div>
      )}
    </div>
  );
};

export default MyTeamPage;
