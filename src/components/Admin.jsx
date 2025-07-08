import React, { useState, useEffect } from 'react';
import { db } from '../Firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

export default function Admin() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const correctPassword = 'Kan@eez3058'; // Change this in production!

  const handleLogin = () => {
    if (password === correctPassword) {
      setAuthenticated(true);
    } else {
      setError('Incorrect password');
    }
  };

  useEffect(() => {
    if (authenticated) {
      const q = query(collection(db, 'users'), orderBy('createdAt', 'desc'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setUsers(data);
      });
      return () => unsubscribe();
    }
  }, [authenticated]);

  if (!authenticated) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="p-6 bg-white rounded shadow-md">
          <h2 className="text-lg font-bold mb-4">Admin Login Page</h2>
          <input
            type="password"
            placeholder="Enter admin password"
            className="border p-2 w-full mb-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <table className="min-w-full border text-sm">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="border p-2">Name</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">City</th>
            <th className="border p-2">WhatsApp</th>
            <th className="border p-2">Gender</th>
            <th className="border p-2">DOB</th>
            <th className="border p-2">Height</th>
            <th className="border p-2">Weight</th>
            <th className="border p-2">Remarks</th>
            <th className="border p-2">Consultation</th>
            <th className="border p-2">Payment</th>
            <th className="border p-2">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="border p-2">{user.firstName} {user.lastName}</td>
              <td className="border p-2">{user.phoneNumber}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.address}</td>
              <td className="border p-2">{user.city}</td>
              <td className="border p-2">{user.whatsappNumber}</td>
              <td className="border p-2">{user.gender}</td>
              <td className="border p-2">{user.dateOfBirth}</td>
              <td className="border p-2">{user.height}</td>
              <td className="border p-2">{user.weight}</td>
              <td className="border p-2">{user.remarks}</td>
              <td className="border p-2">{user.consultationType}</td>
              <td className="border p-2">{user.paymentStatus}</td>
              <td className="border p-2">
                {user.createdAt?.toDate().toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
