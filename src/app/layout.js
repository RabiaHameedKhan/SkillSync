import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "SkillSync",
  description: "Discover trending tech skills with SkillSync",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
