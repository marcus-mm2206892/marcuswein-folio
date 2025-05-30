import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-10 space-y-10">
      <section className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Hey! I’m Marcus 👋</h1>
        <p className="text-lg">Frontend & AI enthusiast. Welcome to my portfolio.</p>
      </section>

      <section className="max-w-xl w-full space-y-2">
        <h2 className="text-xl font-semibold">Projects</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>🎨 Artist’s AI</strong> – AI tools for visual artists. Built with React, Next.js, Prisma, and Gemini API.
          </li>
          <li>
            <strong>🧠 Helmet Pose Detector</strong> – Computer vision system detecting distracted motorcycle drivers.
          </li>
          <li>
            <strong>📚 UniTrack</strong> – Course registration app for students, admins, and faculty.
          </li>
        </ul>
      </section>

      <section className="text-center space-y-1">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p>Email: marcus@email.com</p>
        <p>
          GitHub: <a href="https://github.com/yourusername" className="underline">yourusername</a>
        </p>
      </section>
    </main>
  );
}
