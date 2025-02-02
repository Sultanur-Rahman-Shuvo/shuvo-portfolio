import "./globals.css";
import Theme from "@/components/Theme";
import DarkLight from "@/components/DarkLight";

export const metadata = {
  title: "Sultanur Rahman Shuvo",
  description: "My name is Sultanur Rahman Shuvo. I am a full stack Web developer, Data Analyst and Digital Marketer .",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <DarkLight />
          {children}
        </Theme>
      </body>
    </html>
  );
}
