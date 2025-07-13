// frontend/src/components/RecommendationCard.tsx
export default function RecommendationCard({ plan, explanation }: { plan: string; explanation: string }) {
  return (
    <div className="mt-6 p-4 border rounded shadow">
      <h2 className="text-xl font-semibold">{plan}</h2>
      <p className="mt-2">{explanation}</p>
    </div>
  )
}
