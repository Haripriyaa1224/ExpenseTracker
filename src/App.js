import './App.css';
import { AddTransactions } from './Components/AddTransactions';
import { Balance } from './Components/Balance';
import Header from './Components/Header';
import { IncomeExpenses } from './Components/IncomeExpenses';
import { TransactionList } from './Components/TransactionList';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransactions />
      </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
