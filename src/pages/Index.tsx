import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import BookingForm from "@/components/BookingForm";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Menu />
      <BookingForm />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
