import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PayRoute — Auto-failover Payment Processor Backup Router',
  description: 'Instantly routes payments to backup processors when your primary gets suspended. Maintain business continuity with real-time failover.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7392b17e-a000-4b53-9e68-7beb3820476a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
