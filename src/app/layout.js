export const metadata = {
  title: "Cyberfox Academy",
  description: "Apprends la cybersécurité avec Cyberfox Academy — formations, challenges et coaching.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
