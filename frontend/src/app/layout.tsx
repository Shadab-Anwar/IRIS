
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ClerkProvider, SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IRIS",
  description: "TEAM_IRIS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  //   <ClerkProvider>
  //   <html lang="en">
  //     <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
  //       <SignedOut>
  //         {/* <div className="flex items-center justify-center min-h-screen bg-gray-100">
  //           <SignIn routing="hash" />
  //         </div> */}
  //         <SignInButton/>
  //       <SignedIn>
  //       </SignedIn>
  //       </SignedOut>
  //             {children}
  //     </body>
  //   </html>
  // </ClerkProvider>

<ClerkProvider>
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <SignedOut>
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <SignIn routing="hash" />
          </div>
        </SignedOut>
        <SignedIn>
              {children}
        </SignedIn>
      </body>
    </html>
  </ClerkProvider>
  );
}
