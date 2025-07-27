import { ReactNode } from "react";
import "../globals.css";

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
