import Link from 'next/link';

export default function Home() {
  return (
    <main className="mt-24 ml-16">
      <div className="ml-24 pl-14">
        <h1 className="text-4xl font-bold">CPRG 306: Web Development 2 - Assignments</h1>
        <div className="mt-6">
          <Link href="/week-2" className="text-xl">Week 2 Assignment</Link>
        </div>
        <div><Link href="/week-3" className="text-xl">Week 3 Assignment</Link></div>
        <div><Link href="/week-4" className="text-xl">Week 4 Assignment</Link></div>
        <div><Link href="/week-5" className="text-xl">Week 5 Assignment</Link></div>
        <div><Link href="/week-6" className="text-xl">Week 6 Assignment</Link></div>
        <div><Link href="/week-7" className="text-xl">Week 7 Assignment</Link></div>
        <div><Link href="/week-8" className="text-xl">Week 8 Assignment</Link></div>
      </div>
    </main>
  );
}