import Landing from '../components/Landing';
import Navbar from '../components/Header';
import WarehouseImages from '../components/Reviews.js';
import Map from '../components/Map';
import Form from '../components/Form';
import { Helmet } from 'react-helmet';
import Services from '../components/Services.js';
import FAQs from '../components/Catalogue.js';

export default function Home() {
    return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="24/7 Locksmith Services" />
      </Helmet>
      <Navbar />
      <Landing />
      <Services/>
      <FAQs />
      <Map />
      <WarehouseImages />
      <Form />

    </>
  );
}