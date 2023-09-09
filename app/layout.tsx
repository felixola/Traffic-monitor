import { Work_Sans } from 'next/font/google';
import Header from '../components/Header/Header';
import { Divider } from '@mui/material';
// import Footer from '../components/Footer/Footer';
 
// If loading a variable font, you don't need to specify the font weight
const work = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
    title:  "Traffic monitor",
    description: ""
}
const RootLayout = ({ children, }: { children: React.ReactNode })  => {

  return (

    <html lang="en" className={work.className}>

        <body>

            <main className='app'>

              <Header />

                <Divider orientation="horizontal"  flexItem  />

                {children}


                {/* <Footer /> */}
                
            </main>

        </body>

    </html>

  )
}

export default RootLayout;