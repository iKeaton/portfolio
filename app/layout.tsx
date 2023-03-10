import './globals.css'
import { Inter } from '@next/font/google'

const inter = Inter({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={inter.className}>
        <div className="bg-[url('/background.jpg')] bg-cover z-0">
          {children}
        </div>
      </body>
    </html>
  )
}
