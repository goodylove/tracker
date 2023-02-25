import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeBalance from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import GlobalContextProvider from "./context/GlobalState";
import "./App.css";

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <Header />
        <div className="container">
          <Balance />
          <IncomeBalance />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
