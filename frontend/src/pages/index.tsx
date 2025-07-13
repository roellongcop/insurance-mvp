import { useState } from 'react'
import RecommendationCard from '../components/RecommendationCard'

type FormState = {
  age: number
  income: number
  dependents: number
  risk: 'low' | 'medium' | 'high'
}

export default function Home() {
  const [form, setForm] = useState<FormState>({
    age: 30, income: 50000, dependents: 0, risk: 'medium'
  })
  const [rec, setRec] = useState<{ plan: string; explanation: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/recommendation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    const data = await res.json()
    setRec(data)
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl mb-4">Life Insurance Recommender</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Age, Income, Dependents inputs */}
        <input type="number" value={form.age}
               onChange={e => setForm({ ...form, age: +e.target.value })}
               className="w-full p-2 border rounded" placeholder="Age" required />
        <input type="number" value={form.income}
               onChange={e => setForm({ ...form, income: +e.target.value })}
               className="w-full p-2 border rounded" placeholder="Annual Income" required />
        <input type="number" value={form.dependents}
               onChange={e => setForm({ ...form, dependents: +e.target.value })}
               className="w-full p-2 border rounded" placeholder="Number of Dependents" required />
        <select value={form.risk}
                onChange={e => setForm({ ...form, risk: e.target.value as any })}
                className="w-full p-2 border rounded">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded">Get Recommendation</button>
      </form>

      {rec && <RecommendationCard plan={rec.plan} explanation={rec.explanation} />}
    </div>
  )
}
