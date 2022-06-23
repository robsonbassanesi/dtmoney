import styles from './Header.module.scss';
import imgLogo from '../../assets/logo.svg'

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerComponents}>
        <img src={imgLogo} alt="logo dtmoney" />
        <button type="button">Nova transação</button>
      </div>
    </div>
  )
}