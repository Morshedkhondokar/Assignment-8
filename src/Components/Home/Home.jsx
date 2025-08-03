import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import useTitle from '../../Title/useTitle';

const Home = () => {
  useTitle('Gadget')
    return (
        <div>
          <Banner></Banner>
          <Products></Products>
        </div>
    );
};

export default Home;