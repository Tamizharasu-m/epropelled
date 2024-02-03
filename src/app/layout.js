import Section6 from "@/component/Homepage/Section6";
import Navbar from "./Header/navbar";
import "./globals.css";



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>     
      {children}
      <Section6/>
      </body>
    </html>
  );
}