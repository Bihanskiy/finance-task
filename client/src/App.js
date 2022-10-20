import Header from "./components/layout/header/Header";
import TickerInfo from "./components/layout/tickerInfo/TickerInfo";


function App() {

  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <TickerInfo />
      </main>
    </div>
  );
}

export default App;
