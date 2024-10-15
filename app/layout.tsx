import '../styles/globals.css';
import React from 'react';

export const metadata = {
  title: '복숭아멘토',
  description: '복숭아멘토 시작 페이지',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <div className="max-w-[450px] mx-auto bg-primary-50">{children}</div>
      </body>
    </html>
  );
}
