/* eslint-disable max-len */
import React, { useContext } from 'react';

import '../HomePage/HomePage.scss';
import '../../../Outlet.scss';
import { Slider } from '../Slider/Slider';
import { Category } from '../Category/Category';
import { BrandList } from '../../../componentsApp/SlideListDevices/BrandList/BrandList';
import { StateContext } from '../../../context/ContextReducer';

export const HomePage: React.FC = () => {
  const { phones } = useContext(StateContext);

  const newModel = phones.filter(
    phone => phone.id.includes('iphone-14') || phone.id.includes('iphone-13'),
  );

  const hotPriceModel = phones
    .filter(
      phone => phone.id.includes('iphone-13') || phone.id.includes('iphone-12'),
    )
    .sort((a, b) => a.priceRegular - b.priceRegular);

  return (
    <main className="HomePage Outlet">
      <h1 className="HomePage__title">Welcome to Nice Gadgets store!</h1>

      <div className="HomePage__slider">
        <Slider />
      </div>

      <div className="HomePage__brandNew">
        <BrandList devicesForRender={newModel} title="Brand new model" />
      </div>

      <div className="HomePage__category">
        <Category />
      </div>

      <div className="HomePage__hotPrice">
        <BrandList devicesForRender={hotPriceModel} title="Hot prices" />
      </div>
    </main>
  );
};
