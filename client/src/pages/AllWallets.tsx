import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Wallet = {
  _id: string;
  address: string;
  userId?: string;
  createdAt: string;
};

const AllWallets: React.FC = () => {
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [message, setMessage] = useState('');

  const fetchWallets = async () => {
    try {
      const response = await axios.get<Wallet[]>('http://localhost:5000/api/wallets');
      setWallets(response.data);
    } catch (error) {
      console.error('Error fetching wallets:', error);
    }
  };

  useEffect(() => {
    fetchWallets();
  }, []);

  const deleteWallet = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/wallets/${id}`);
      setWallets(wallets.filter(wallet => wallet._id !== id));
      setMessage(`Wallet ${id} deleted.`);
    } catch (error) {
      console.error('Error deleting wallet:', error);
      setMessage('Error deleting wallet.');
    }
  };

  return (
    <div>
      <h2>All Wallets</h2>
      {message && <p>{message}</p>}
      <ul>
        {wallets.map(wallet => (
          <li key={wallet._id}>
            <p>{wallet.address}</p>
            <p>{wallet._id}</p>
            <p>{wallet.createdAt}</p>
            <button onClick={() => deleteWallet(wallet._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllWallets;
