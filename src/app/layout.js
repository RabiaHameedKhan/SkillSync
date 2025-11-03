import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "SkillSync",
  description: "Discover trending tech skills with SkillSync",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main >{children}</main> 
        <Footer/>

      </body>
    </html>
  );
}
