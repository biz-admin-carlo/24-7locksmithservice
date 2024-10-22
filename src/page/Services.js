import Form from '../components/Form';
import Service from '../components/Services.js';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Header';

export default function Services() {
    return (
    <>
      <Helmet>
        <title>Services</title>
        <meta name="description" content="Services in 24/7 Locksmith Services." />
      </Helmet>
      <Navbar />
      <Service />
      <Form />
    </>
  );
}