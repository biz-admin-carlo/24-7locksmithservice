import ShowcaseOne from '../components/ShowcaseOne';
import Navbar from '../components/Header';
import { Helmet } from 'react-helmet';

export default function Home() {
    return (
    <>
      <Helmet>
        <title>Washer & Dryer Repair</title>
        <meta name="description" content="Washer & Dryer Repair." />
      </Helmet>
      <Navbar />
      <ShowcaseOne />
    </>
  );
}