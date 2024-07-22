import Navbar from "./ui/components/Navbar";
import Footer from "./ui/components/Footer";
import Hero from "./ui/components/hero";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="flex flex-col px-3 py-2 gap-6 my-10">
      <Hero/>
    </main>
    <Footer />
    </>
  );
}