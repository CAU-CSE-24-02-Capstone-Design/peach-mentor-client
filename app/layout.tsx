import React from 'react'; 
import '../styles/globals.css';

export const metadata = {
  title: "Your App Title",
  description: "Your App Description"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
