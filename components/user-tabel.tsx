import { getUsers } from '@/lib/data'
import React from 'react'
import UserContent from './user-content';

const UserTabel = async () => {
  const users = await getUsers();

  return (
    <div className="h-screen">
      <UserContent users={users} />
    </div>
  )
}

export default UserTabel