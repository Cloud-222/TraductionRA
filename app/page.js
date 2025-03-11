
import Header from "@/src/components/Header.js";
import BodyTranslation from "@/src/components/BodyTranslation.js";
import Footer from "@/src/components/Footer.js";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Header />
      <BodyTranslation/>
      <Footer />
    </div>
  );
}
