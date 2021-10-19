import Navbar from './components/Navbar/Navbar'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs'
import OurService from './components/OurService/OurService'
import FindDoctor from './components/FindDoctor/FindDoctor'
import News from './components/News/News'
import ContactUs from './components/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'
import NotFound from './components/NotFound/NotFound'
import Login from './components/Login/Login'
import Service from './components/Home/Service'
import Signup from './components/Login/Signup'
import PrivateRoute from './PrivateRoute/PrivateRoute'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/aboutUs'>
          <AboutUs />
        </Route>
        <Route path='/ourService'>
          <OurService />
        </Route>
        <PrivateRoute path='/doctor'>
          <FindDoctor />
        </PrivateRoute>
        <Route path='/news'>
          <News />
        </Route>
        <Route path='/contact'>
          <ContactUs />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route exact path='/service/:serviceDetails'>
          <Service />
        </Route>

        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
