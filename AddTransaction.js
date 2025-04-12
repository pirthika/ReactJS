


import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

   
    if (/[^a-zA-Z\s]/.test(text)) {
      alert("Please enter a valid text. Special characters are not allowed.");
      return;
    }

  
    if (isNaN(amount) || amount === '') {
      alert("Please enter a valid amount.");
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount  
    };

    addTransaction(newTransaction);

    setText('');
    setAmount('');
  };

  return (
    <div>
      <h3 className="new-transaction">Add new transaction</h3>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text" className="label">Text:</label>
          <input 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="Enter text..." 
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount" className="label">
            Amount: <br /> (negative - expense, positive + income)
          </label>
          <input 
            className="input" 
            type="text" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            placeholder="Enter amount..."  
          />
        </div> 
        <div>
          <button className="button">Add Transaction</button>
        </div>    
      </form>
    </div>
  );
};

export default AddTransaction;
