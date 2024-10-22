import Map from '../components/Map';
import Navbar from '../components/Header';
import { Helmet } from 'react-helmet';

export default function Location() {
    return (
    <>
      <Helmet>
        <title>Location</title>
        <meta name="description" content="Locate Us via Google Maps" />
      </Helmet>
      
      <Navbar />
      <Map />
    </>
  );
}