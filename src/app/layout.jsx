import Favicon from "/public/images/favicon.png";
import ClientRootLayout from "../components/ClientRootLayout";

export const metadata = {
  title: "Snehitha Pothina | Graduate Student",
  description:
  "Welcome to Snehitha's Portfolio! As a passionate graduate student eager to make an impact in the real-world tech industry, I thrive on transforming ideas into innovative solutions. Explore my work, discover my journey, and let’s team up to create something extraordinary together!",
  keywords: [
    "portfolio",
    "app",
    "next.js 13",
    "sass",
    "scss",
    "react",
    "chakra",
    "hashnode",
    "best portfolio",
    "best portfolio website"
  ],
    icons: [{
    rel: 'icon',
    url: Favicon.src,
  }]
};

export default function RootLayout({ children }) {
  return <ClientRootLayout>{children}</ClientRootLayout>
}
