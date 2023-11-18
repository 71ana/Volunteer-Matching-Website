import React, {useState} from 'react'
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation'
import { EmailProvider } from './EmailContext';
import { AuthProvider } from './AuthContext';
import Rout from './rout';

const App = () => {
  const [email, setEmail] = useState(''); 

  const searchbtn = (product) => 
  {
    const change = Productdetail.filter((x) => 
    {
      return x.Cat === product
    })
    setProduct(change)
  }

  return (
    <>
     <AuthProvider>
        <EmailProvider value={{ email, setEmail }}>
          <BrowserRouter>
            <Navigation searchbtn={searchbtn} />
            <Rout
            />
            <Footer/>
          </BrowserRouter>
        </EmailProvider>
      </AuthProvider>
    </>
  );
}

export default App
