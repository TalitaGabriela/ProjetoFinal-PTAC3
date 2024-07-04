export const metadata = {
  title: "Lightstick KPOP Store",
  description: "Adquira já o seu Lightstick :)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
          {children}
      </body>
    </html>
  );
}
