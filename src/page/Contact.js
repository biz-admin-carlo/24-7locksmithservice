import Form from '../components/Form';
import Navbar from '../components/Header';
import { Helmet } from 'react-helmet';

export default function Contact() {
    return (
    <>
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Contact us for any inquiries or questions." />
      </Helmet>
      <Navbar />
      <Form />
    </>
  );
}