import React, { useState, useEffect } from 'react';
import baseUrl from '../../Hooks/baseUrlAxiosInstance';
import { Search, Printer, X } from 'lucide-react';

const AssetsList = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');

  useEffect(() => {
    baseUrl.get('/assets')
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.error('Error fetching assets:', err);
      });
  }, []);



  const filteredAssets = data.filter(asset => {
    // Case insensitive search filter
    const searchFilter = asset.assetName?.toLowerCase().includes(searchQuery.toLowerCase());

    // Type filter logic
    const matchesType = typeFilter === 'all' || asset.assetType.toLowerCase() === typeFilter.toLowerCase();

    return matchesType && searchFilter;
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
      <h2 className="text-2xl font-bold mb-6">My Assets</h2>
      
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

        {/* Type Filter */}
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="w-full md:w-48 p-2 border rounded-lg focus:outline-none focus:border-purple-500"
        >
          <option value="all">All Types</option>
          <option value="returnable">Returnable</option>
          <option value="non-returnable">Non-returnable</option>
        </select>
      </div>

      {/* Assets Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg shadow">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Asset Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date Added</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredAssets.map((asset) => (
              <tr key={asset._id.$oid} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{asset.assetName}</td>
                <td className="px-6 py-4 whitespace-nowrap capitalize">{asset.assetType}</td>
                <td className="px-6 py-4 whitespace-nowrap">{asset.dateAdded}</td>
                <td className="px-6 py-4 whitespace-nowrap">{asset.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handlePrint(asset)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <Printer className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleCancel(asset)}
                    className="text-red-600 hover:text-red-900 ml-2"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetsList;
