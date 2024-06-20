import React from 'react';
import Slider from './slider';
import Content from './Content';
import OurTeam from './OurTeam';
import OurWebsite from './OurWebsite';
import Advertising from './Advertising';
import Footer from '../Layouts/Footer';
import Copyrights from '../Layouts/Copyrights';

function AllHome() {
  return (
    <div>
      <Slider/>
      <Content/>
      <OurTeam/>
      <OurWebsite/>
      <Advertising/>
      <Footer/>
      <Copyrights/>
    </div>
  );
}

export default AllHome;
