import "./globals.css";
import { Signika } from "next/font/google";

const signika = Signika({ subsets: ["latin"] });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={signika.className}>
        <div className="container mx-auto mb-10">

          {children}
        </div>
      </body>
    </html>
  );
}
