import React, { useState, useEffect } from 'react';
import axios from 'axios';

type Wallet = {
  id: string;
  address: string;
  // Add more fields here if your wallet object includes them
};

const AllWallets: React.FC = () => {
  const [wallets, setWallets] = useState<Wallet[]>([]);

  useEffect(() => {
    const fetchWallets = async () => {
      try {
        const response = await axios.get<Wallet[]>('http://localhost:5000/api/wallets');
        setWallets(response.data);
      } catch (error) {
        console.error('Error fetching wallets', error);
      }
    };

    fetchWallets();
  }, []);

  return (
    <div>
      <h1>All Wallets</h1>
      <ul>
        {wallets.map((wallet) => (
          <li key={wallet.id}>{wallet.address}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllWallets;
