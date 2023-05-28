import './globals.css'

export const metadata = {
  title: 'Komon Connections App',
  description: 'Komon Connections App Management',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
