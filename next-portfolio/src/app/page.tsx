// import Image from "next/image";
// import Link from "next/link";
// If Navbar.tsx is in src/components/Navbar.tsx, use the following relative import:
import Navbar from "@components/Navbar";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />

        <section className="h-screen flex items-center justify-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight">
            DAN
          </h1>
        </section>
      </main>

      <main className="bg-black text-white font-sans">
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight">
            Design. Motion. Code.
          </h1>
        </section>

        {/* Mission Statement */}
        <section className="py-32 px-8 bg-white text-black">
          <p className="text-2xl max-w-3xl mx-auto leading-relaxed text-center">
            We craft striking experiences that blend design, motion, and
            technology.
          </p>
        </section>

        {/* Featured Projects */}
        <section className="bg-gray-900 text-white py-20 px-6">
          <h2 className="text-4xl mb-10 text-center font-bold">
            Selected Work
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white text-black p-6 rounded-xl">Project 1</div>
            <div className="bg-white text-black p-6 rounded-xl">Project 2</div>
            <div className="bg-white text-black p-6 rounded-xl">Project 3</div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-24 px-8 bg-black text-white text-center">
          <h3 className="text-3xl font-bold mb-8">Capabilities</h3>
          <ul className="space-y-4 text-lg">
            <li>Branding & Identity</li>
            <li>Web Development</li>
            <li>Motion & 3D</li>
          </ul>
        </section>

        {/* About Section */}
        <section className="py-32 px-6 bg-white text-black">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">About Us</h3>
            <p className="text-lg leading-relaxed">
              We’re a multidisciplinary team passionate about design systems and
              storytelling.
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="h-screen bg-green-600 text-white flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">
              Let’s Build Something Great
            </h2>
            <a href="/contact" className="text-lg underline hover:no-underline">
              Get in touch →
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-6 px-4 flex justify-between text-sm">
          <span>© 2025 YourName</span>
          <span className="space-x-4">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Dribbble</a>
          </span>
        </footer>
      </main>

      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-grotesk text-7xl sm:text-8xl md:text-9xl font-black tracking-tight leading-[1.05] text-black">
            DAN
          </h1>

          <p className="mt-6 text-xl sm:text-2xl text-gray-600 font-sans">
            {/* <p className="font-grotesk mt-6 text-xl sm:text-2xl text-gray-600"> */}
            Develop. Analyse. Neural Network Full-Stack Developer • Quant
            Researcher • Storyteller
          </p>
        </div>
      </section>

      {/* <h1 className="font-grotesk text-center text-5xl">Dan Ruksujarit</h1>
      <h1 className="font-neue text-center text-5xl">Dan Ruksujarit</h1>
      <h1 className="font-schi-grotesk text-center text-5xl">Dan Ruksujarit</h1>
      <h1 className="font-inter text-center text-5xl">Dan Ruksujarit</h1>
      <h1 className="font-inter-tight text-center text-5xl">Dan Ruksujarit</h1> */}
    </>
  );
}
