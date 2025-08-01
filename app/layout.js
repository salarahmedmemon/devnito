import './globals.css';


export const metadata = {
  title: 'Devnito',
  description: 'Devnito - IT Company Dubai',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
