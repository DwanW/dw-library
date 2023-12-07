import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Container, Theme } from "@radix-ui/themes";
import Navigation from "./components/navigation";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DW Library",
  description: "personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme
          accentColor="blue"
          grayColor="gray"
          panelBackground="solid"
          scaling="100%"
          radius="full"
          appearance="dark"
        >
          <Container
            px={{
              initial: "4",
              xs: "0",
            }}
            className="pt-12 sm:pt-20"
          >
            <Navigation />
            {children}
          </Container>
        </Theme>
      </body>
    </html>
  );
}
