import { useEffect, useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/labData.json')
        if (!response.ok) throw new Error('Failed to fetch card data')
        const data = await response.json()
        setCards(data)
      } catch (fetchError) {
        setError(fetchError.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="app-shell">

      <main className="main-content">
        <section className="intro">
          <h1>DUET IUPC 2025</h1>
        </section>
        {loading && <p className="status-message">Loading cards...</p>}
        {error && <p className="status-message status-message--error">{error}</p>}
        {!loading && !error && (
          <section className="card-grid">
            {cards.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </section>
        )}
      </main>
    </div>
  )
}

export default App
