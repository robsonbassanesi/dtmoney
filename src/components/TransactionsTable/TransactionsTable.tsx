import styles from './TransactionsTable.module.scss'

export function TransactionsTable() {
  return (
    <div className={styles.transactionsTable}>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td>Desenvolvimento de site</td>
            <td className={styles.deposit}>R$12.000</td>
            <td>dev</td>
            <td>12/05/2022</td>
          </tr>
          <tr >
            <td>Desenvolvimento de site</td>
            <td className={styles.withdraw}>-R$12.000</td>
            <td>dev</td>
            <td>12/05/2022</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}