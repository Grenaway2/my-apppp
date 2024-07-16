"use client";

import { useAuth } from '@/context/AuthContext';

const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Profile</h2>
      {user ? (
        <div>
          <p>Email: {user.email}</p>
          <button
            className="bg-red-600 text-white p-2 rounded mt-4"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default Profile;

