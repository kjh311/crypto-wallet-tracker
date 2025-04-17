import React, { useState } from 'react';
import axios from 'axios';

const DeleteWallet: React.FC = () => {
  const [walletId, setWalletId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/wallets/${walletId}`);
      setMessage(`Wallet ${walletId} deleted successfully.`);
      setWalletId('');
    } catch (error) {
      console.error('Error deleting wallet:', error);
      setMessage('Error deleting wallet.');
    }
  };

  return (
    <div>
      <h2>Delete Wallet</h2>
      <input
        type="text"
        placeholder="Enter wallet ID"
        value={walletId}
        onChange={(e) => setWalletId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteWallet;
