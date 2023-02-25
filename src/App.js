import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeBalance from "./components/IncomeExpense";
import Transaction from "./components/Transaction";
import AddTransaction from "./components/AddTransaction";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
        <IncomeBalance />
        <Transaction />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
