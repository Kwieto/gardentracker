import Link from 'next/link';

export default function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-green-600">
              Garden Tracker
            </Link>
            <div className="space-x-4">
              <Link href="/plants" className="text-gray-700 hover:text-green-600">
                Plants
              </Link>
              <Link href="/plants/add" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Add Plant
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}