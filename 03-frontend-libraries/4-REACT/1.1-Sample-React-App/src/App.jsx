import Home from './pages/Home.jsx'
import HelloJsx from './components/HelloJsx.jsx'
import styles from './styles/Button.module.css'

export default function App() {
  return (
    <main className="container">
      <h1>Sample React Lab</h1>
      <Home />
      <button className={styles.btn}>Styled Button</button>
      <HelloJsx />
    </main>
  )
}
