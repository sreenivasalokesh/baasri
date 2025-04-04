import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Sarees from './components/Sarees';
import SareeDetails from './components/SareeDetails';
import ProductList from './components/Product/ProductList';
import ProductDetail from './components/Product/ProductDetail';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import AboutPage from './components/about/about';
import { SareeDataProvider } from './components/provider/SareeDataContext';
import Breadcrumbs from './Breadcrumb';

function App() {
  return (
    <SareeDataProvider>
      <Router>
      {/* <Breadcrumbs /> */}
        <Navbar />
        <ScrollToTop />
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sarees" element={<Sarees />} />
          <Route path="/sarees/:type" element={<SareeDetails />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
        <FloatingContact />
      </Router>
    </SareeDataProvider>
  );
}

export default App;