import CurrencySelect from '../components/currency-select'
import DataPlanFilters from '../components/data-plan-filters'
import Dataplans from '../components/data-plans'
import ISPServices from '../components/isp-services'
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
          <CurrencySelect />
          <ISPServices />
        </nav>
        <main>
          {children}
          <DataPlanFilters />
          <Dataplans />
        </main>
      </body>
    </html>
  )
}
