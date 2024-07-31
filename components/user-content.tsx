'use client';

import { useState } from 'react';
import { IoChevronForwardCircleOutline } from 'react-icons/io5';
import { ActionButtonUser } from './button';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface UserContentProps {
  users: User[];
}

const UserContent: React.FC<UserContentProps> = ({ users }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const totalPages = Math.ceil(users.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;

  const filteredItems = users.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-4">
      <h1 className="font-bold text-lg pl-2 border-l-4 border-l-orange-400">Users</h1>
      <input
        type="text"
        placeholder="Cari data..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="my-4 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
        <table className="w-full text-left text-sm border-collapse">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2 font-medium">No</th>
              <th className="px-4 py-2 font-medium">Nama</th>
              <th className="xl:block hidden px-4 py-2 font-medium">Email</th>
              <th className="px-4 py-2 font-medium">Role</th>
              <th className="px-4 py-2 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-gray-900">{startIndex + index + 1}</td>
                <td className="px-4 py-2 text-gray-900">{user.name}</td>
                <td className="xl:block hidden px-4 py-2 text-gray-900">{user.email}</td>
                <td className="px-4 py-2 text-gray-900">{user.role}</td>
                <td className="px-4 py-2">
                  <ActionButtonUser id={user.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4 px-4 py-2">
        <button
          className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-300 text-gray-600' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="text-gray-700">
          Page {currentPage} of {totalPages}
        </div>
        <button
          className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-300 text-gray-600' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserContent;
