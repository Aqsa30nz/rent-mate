export default function RentalHistoryPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-8 text-white">
      <h1 className="text-4xl font-bold mb-6">Rental History</h1>

      <div className="space-y-4">
        <div className="rounded-xl border border-slate-700 p-4">
          <h2 className="font-semibold">DSLR Camera</h2>
          <p className="text-slate-400">Rented: 10 Jun 2026</p>
          <p className="text-emerald-400">Returned Successfully</p>
        </div>

        <div className="rounded-xl border border-slate-700 p-4">
          <h2 className="font-semibold">Camping Tent</h2>
          <p className="text-slate-400">Rented: 02 Jun 2026</p>
          <p className="text-emerald-400">Returned Successfully</p>
        </div>
      </div>
    </div>
  )
}