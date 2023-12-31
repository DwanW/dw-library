import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Container, Theme } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import SessionProvider from "./components/sessionProvider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DW Library",
  description: "personal portfolio",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <SessionProvider session={session}>
          <Theme
            radius="small"
            // appearance="dark"
          >
            <Container
              px={{
                initial: "4",
              }}
              className="pt-12 sm:pt-20 relative"
            >
              {children}
            </Container>
          </Theme>
        </SessionProvider>
      </body>
    </html>
  );
}
