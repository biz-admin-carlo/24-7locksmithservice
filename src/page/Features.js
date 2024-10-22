import Navbar from '../components/Header';
import Reviews from '../components/Reviews.js';
import { Helmet } from 'react-helmet';

export default function Features() {
    return (
    <>
      <Helmet>
        <title>Features</title>
        <meta name="description" content="Features of 24/7 Locksmith Services" />
      </Helmet>
      <Navbar />
      <Reviews />
    </>
  );
}