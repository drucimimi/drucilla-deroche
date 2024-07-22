import Navbar from "./ui/components/Navbar";
import Footer from "./ui/components/Footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="flex flex-col px-3 py-2 gap-6 my-10">
      <h1>Portfolio de Drucilla Deroche</h1>
    </main>
    <Footer />
    </>
  );
}