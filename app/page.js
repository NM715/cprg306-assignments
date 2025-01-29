import Link from 'next/link';

export default function Home() {
  return (
    <main className="mt-24 ml-16">
      <div className="ml-24 pl-14">
        <h1 className="text-4xl font-bold">CPRG 306: Web Development 2 - Assignments</h1>
        <div className="mt-6">
          <Link href="/week-2" className="text-xl">Week 2 Assignment</Link>
        </div>
      </div>
    </main>
  );
}