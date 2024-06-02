import Nav from '@components/Nav'
import {AuthContextProvider} from '@components/AuthContextProvider'
import '@styles/globals.css'

export const metadata = {
  title: 'Promptopia',
  description: 'Share the best prompts with the world and discover new ones.',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
      <AuthContextProvider>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
        <Nav />
        {children}
        </main>
      </AuthContextProvider> 
      </body>
    </html>
  )
}
