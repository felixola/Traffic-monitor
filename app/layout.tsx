import { Inter } from 'next/font/google'
import Header from '../components/Header/Header';
import { Divider } from '@mui/material';
import '../styles/global.css';
// import Footer from '../components/Footer/Footer';
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})


export const metadata = {
    title:  "Traffic monitor",
    description: ""
}
const RootLayout = ({ children, }: { children: React.ReactNode })  => {

  return (

    <html lang="en" className={inter.className}>

        <body>

            <main className='app'>

              <Header />

                <Divider orientation="horizontal"  flexItem  />

                {children}

                {/* <Divider orientation="horizontal"  flexItem  />


                <Footer /> */}
                
            </main>

        </body>

    </html>

  )
}

export default RootLayout;