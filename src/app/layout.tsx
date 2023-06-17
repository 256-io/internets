import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Internets',
  description: 'View and compare internet plans and providers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " flex flex-auto"}>
      <nav className='border- p-8' >
        <div>Currency Select</div>
        <div>ISP and Service Select</div>
      </nav>
      <main>
        {children}
        <div>Plan Filters</div>
      </main>
      </body>
    </html>
  )
}
