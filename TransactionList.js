




import React, { useContext } from 'react'; 
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3 className="history">History</h3>
      <hr />
      <br />
      <ul className="list">
        {transactions.length > 0 ? (
          transactions.map(transaction => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))
        ) : (
          <li>No transactions found.</li>
        )}
      </ul>
    </div>
  );
};

export default TransactionList;
