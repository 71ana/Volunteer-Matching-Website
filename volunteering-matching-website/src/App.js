import React, {useState} from 'react'
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation'
import { EmailProvider } from './EmailContext';
import { AuthProvider } from './AuthContext';
import Rout from './rout';
import Footer from './footer';
import Opportunitydetail from './opportunitiesdetail';

const App = () => {
  const [email, setEmail] = useState(''); 

  const [form, setForm] = useState([])

  const [close, setClose] = useState(false)
  const [detail, setDetail] = useState([])

  const [opportunity, setOpportunity] = useState(Opportunitydetail)

  const searchbtn = (opportunity) => 
  {
    const change = Opportunitydetail.filter((x) => 
    {
      return x.Country === opportunity
    })
    setOpportunity(change)
  }

  const view = (opportunity) => 
  {
    setDetail([{...opportunity}])
    setClose(true)
  }

  const addtoform = (opportunity) => 
  {
    const exsit = form.find((x) => 
    {
      return x.id === opportunity.id
    })
    if(exsit)
    {
      alert("This opportunity has already been chosen by you. Go to the form section to complete the additional information required.")
    }
    else
    { 
      setForm([...form, {...product, qty:1}])
      alert("The opportunity has been successfully chosen. You still have to apply. Go to the form section to complete the additional information required.")
    }
  } 
  console.log(form)

  return (
    <>
     <AuthProvider>
        <EmailProvider value={{ email, setEmail }}>
          <BrowserRouter>
            <Navigation searchbtn={searchbtn} />
            <Rout
            opportunity={opportunity}
            setOpportunity={setOpportunity}
            detail={detail}
            view={view}
            close={close}
            setClose={setClose}
            form={form}
            setForm={setForm}
            addtoform={addtoform}
            />
            <Footer/>
          </BrowserRouter>
        </EmailProvider>
      </AuthProvider>
    </>
  );
}

export default App
