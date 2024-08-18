export const metadata = {
    title: 'Trikay assignment',
    description: 'Assignment',
  }
   
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <div id="root">{children}</div>
        </body>
      </html>
    )
  }