// src/app/layout.js
import './globals.css';

export const metadata = {
  title: 'Cyberfox Academy',
  description: 'Apprends la cybersécurité avec Cyberfox Academy',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
