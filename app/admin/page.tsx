import { getConsultations } from "@/actions/consultation";

export default async function AdminPage() {
  const consultations = await getConsultations();

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-4xl font-bold">Consultation Leads</h1>

        <p className="mt-2 text-slate-600">{consultations.length} leads</p>

        {/* Table */}
        <div className="mt-10 overflow-hidden rounded-2xl border bg-white">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-slate-50">
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Business</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-left">Services</th>

                <th className="p-4 text-left">Message</th>
                <th className="p-4 text-left">Date</th>
              </tr>
            </thead>

            <tbody>
              {consultations.map((consultation) => (
                <tr key={consultation.id} className="border-b">
                  <td className="p-4 bg-green-400">{consultation.status}</td>
                  <td className="p-4">{consultation.full_name}</td>
                  <td className="p-4">{consultation.business_name}</td>
                  <td className="p-4">{consultation.email}</td>
                  <td className="p-4">{consultation.phone}</td>
                  <td className="p-4">{consultation.services?.join(", ")}</td>

                  <td className="p-4">{consultation.message}</td>
                  <td className="p-4">
                    {new Date(consultation.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
