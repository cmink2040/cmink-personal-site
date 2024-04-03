export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (

        <html lang="en">

          <head>
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <title> CMinK </title>
          </head>
          <body>
                <div id="root">
                  {children}
                  
                </div>
            </body>
        </html>
        
    )
  }