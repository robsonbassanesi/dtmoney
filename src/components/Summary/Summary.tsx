import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import styles from './Summary.module.scss'

export function Summary() {
  return (
    <header className={styles.dashboard}>
      <div className={styles.dashboardBox}>
        <main>
          <p>Entradas</p>
          <img src={incomeImg} alt="ícone entradas" />
        </main>
        <h1>R$17.400,00</h1>
      </div>
      <div className={styles.dashboardBox}>
        <main>
          <p>Saídas</p>
          <img src={outcomeImg} alt="ícone entradas" />
        </main>
        <h1>R$1.259,00</h1>
      </div>
      <div className={styles.dashboardBox}>
        <main>
          <p>Total</p>
          <img src={totalImg} alt="ícone entradas" />
        </main>
        <h1>R$16.141,00</h1>
      </div>
    </header>
  )
}