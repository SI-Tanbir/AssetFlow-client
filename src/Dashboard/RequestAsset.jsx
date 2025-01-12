import React, { useState } from 'react';
import { Search, Printer, X } from 'lucide-react';

const RequestAsset = () => {
  // States for search and filters
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  // Sample data - Replace with your API call
  const assets = [
    {
      "id": 1,
      "name": "MacBook Pro",
      "type": "returnable",
      "availability": "available",
      "requestDate": "2024-01-10",
      "approvalDate": "2024-01-12",
      "status": "approved"
    },
    {
      "id": 2,
      "name": "Office Chair",
      "type": "returnable",
      "availability": "out of stock",
      "requestDate": "2024-01-15",
      "approvalDate": null,
      "status": "pending"
    },
    {
      "id": 3,
      "name": "Notebook Set",
      "type": "non-returnable",
      "availability": "available",
      "requestDate": "2024-01-08",
      "approvalDate": "2024-01-09",
      "status": "approved"
    },
    {
      "id": 4,
      "name": "Wireless Mouse",
      "type": "returnable",
      "availability": "available",
      "requestDate": "2024-01-12",
      "approvalDate": "2024-01-13",
      "status": "approved"
    },
    {
      "id": 5,
      "name": "Ballpoint Pen",
      "type": "non-returnable",
      "availability": "out of stock",
      "requestDate": "2024-01-11",
      "approvalDate": null,
      "status": "pending"
    },
    {
      "id": 6,
      "name": "Standing Desk",
      "type": "returnable",
      "availability": "available",
      "requestDate": "2024-01-14",
      "approvalDate": "2024-01-15",
      "status": "approved"
    },
    {
      "id": 7,
      "name": "Whiteboard Markers",
      "type": "non-returnable",
      "availability": "out of stock",
      "requestDate": "2024-01-10",
      "approvalDate": "2024-01-11",
      "status": "approved"
    }
  ]
  


  // Filter and search logic
//   const filteredAssets = assets.filter(asset => {
//     const matchesSearch = asset.name.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesStatus = statusFilter === 'all' || asset.status === statusFilter;

//     const matchesType = typeFilter === 'all' || asset.type === typeFilter;

//     return matchesSearch && matchesStatus && matchesType;
//   });
const filteredAssets = assets.filter(asset => {
    const matchesSearch = asset.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || asset.status === statusFilter;

    const matchesType = typeFilter === 'all' || asset.availability === typeFilter;
  
    return matchesSearch && matchesStatus && matchesType;
  });
  


  const handlePrint = (asset) => {
    // Implement print functionality
    console.log('Printing asset details:', asset);
  };

  const handleCancel = (asset) => {
    // Implement cancel request functionality
    console.log('Cancelling request:', asset);
  };


  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Request Asset</h2>
      
      {/* Search and Filters */}
      <div className="mb-6 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
        {/* Search Bar */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search assets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-purple-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>


        {/* Status Filter */}
        <div className=''>
            <div>
            <h2 className='font-bold '>Availability</h2>
            </div>
       

<div>

<select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="w-full md:w-48 p-2 border rounded-lg focus:outline-none focus:border-purple-500"
        >
        
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
        </select>
</div>
       

        </div>
      

        {/* Type Filter */}
        <div>

        <div>

<h2 className='font-bold'>Asset type</h2>

</div>

<div>
<select
  value={typeFilter}
  onChange={(e) => setTypeFilter(e.target.value)}
  className="w-full md:w-48 p-2 border rounded-lg focus:outline-none focus:border-purple-500"
>
  <option value="all">All Types</option>
  <option value="available">available</option>
  <option value="out of stock">out of stock</option>
</select>
</div>


        </div>
       
      </div>

      {/* Assets Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg shadow">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Asset Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">availability</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Request Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Approval Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredAssets.map((asset) => (
              <tr key={asset.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{asset.name}</td>
                <td className="px-6 py-4 whitespace-nowrap capitalize">{asset.availability}</td>
                <td className="px-6 py-4 whitespace-nowrap">{asset.requestDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">{asset.approvalDate || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${asset.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {asset.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {asset.status === 'approved' ? (
                    <button
                      onClick={() => handlePrint(asset)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Printer className="h-5 w-5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleCancel(asset)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestAsset;