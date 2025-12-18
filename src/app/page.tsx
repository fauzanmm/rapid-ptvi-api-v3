import { prismaMainMinecare } from "@/lib/prisma/main-minecare-prisma-client";

export default async function Home() {
  const user = await prismaMainMinecare.pitFuelTimeLossCurrent.findFirst();
  const post = "";
  // const post = await prismaPC75.datasetCycle.findFirst();

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900">
            Multi-DB Showcase
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Data fetched from two distinct databases.
          </p>
        </header>

        <section className="mb-8 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            User Data
          </h2>
          <pre className="whitespace-pre-wrap text-sm text-gray-700">
            {user ? JSON.stringify(user, null, 2) : "No user data available."}
          </pre>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            Post Data
          </h2>
          <pre className="whitespace-pre-wrap text-sm text-gray-700">
            {post ? JSON.stringify(post, null, 2) : "No post data available."}
          </pre>
        </section>
      </div>
    </main>
  );
}
