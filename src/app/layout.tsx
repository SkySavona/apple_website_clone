import React from "react";
import "./globals.css";

// Layout props type
type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
  
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/assets/images/apple.svg" />
        <title>Apple iPhone</title>
      </head>
      <body>
        <header>{/* Add your header content here */}</header>

        <main>{children}</main>

        <footer>{/* Add your footer content here */}</footer>
      </body>
    </html>
  );
}
