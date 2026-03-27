// import Footer from "@/ShareComponents/Footer";
import Footer from "@/Components/Footer/Footer";
import NavBar from "@/ShareComponents/NavBar";


export default function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}