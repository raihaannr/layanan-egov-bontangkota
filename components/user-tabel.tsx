import React from 'react';
import UserContent from './user-content';
import { getAllUsers } from '@/lib/actions';

const UserTabel = async () => {
  const { users, message } = await getAllUsers();

  if (message) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-red-500">{message}</p>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <UserContent users={users} />
    </div>
  );
};

export default UserTabel;
