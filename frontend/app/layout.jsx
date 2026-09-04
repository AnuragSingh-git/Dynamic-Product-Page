import "./globals.css";

export const metadata = {
  title: "Dynamic Product Page",
  description: "Smartphones on EMI, backed by mutual funds",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b bg-white">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <a href="/" className="text-xl font-bold text-gray-900">
              emi<span className="text-brand-orange">shop</span>
            </a>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
