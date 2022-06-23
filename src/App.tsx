import { Header } from './components/Header/Header';
import { Summary } from './components/Summary/Summary';
import { TransactionsTable } from './components/TransactionsTable/TransactionsTable';
import './global.scss';

export function App() {
  return (
    <>
      <Header />
      <Summary />
      <TransactionsTable />
    </>
  )
}


