import React from 'react';
import { useLocation } from 'react-router-dom';
import BasePage from '../../components/BasePage';

const Tracking = () => {
  const path = useLocation();
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et sem ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean id cursus ex. Donec rutrum mi dolor, eu convallis velit facilisis in. Suspendisse at justo vitae tellus pulvinar condimentum id id risus. Donec ac risus dui. Nam et tempus urna. Quisque a erat maximus, eleifend nulla sit amet, placerat ex. Etiam nec risus non elit posuere tempor eget eu magna. Suspendisse consectetur arcu sit amet tortor cursus placerat. Aenean mattis porta lacus, eget ornare ex pulvinar maximus. Donec feugiat malesuada enim, et maximus mauris hendrerit eu. Proin finibus, ex sed molestie pulvinar, nunc mauris semper magna, nec tempus urna lorem in sapien. Donec vehicula libero magna, vitae posuere ligula vestibulum in. Sed eget ipsum nec elit pulvinar efficitur.
    Integer lectus tellus, cursus porta vestibulum sed, ultricies vel velit. Praesent bibendum felis sit amet nisl bibendum euismod. Maecenas scelerisque tincidunt massa vitae consequat. Maecenas vehicula nunc ut tortor placerat elementum. Maecenas eget euismod neque, vitae finibus nisi. Morbi et mattis tortor, eget aliquet erat. Aenean dapibus suscipit erat, id blandit eros molestie ut. Duis convallis finibus orci id ultricies. Donec eleifend, enim nec posuere sagittis, enim dui pretium leo, nec ultrices nisi massa ut nisi. Nunc ut pharetra mi. Pellentesque ex sapien, tristique sed ante a, dictum placerat sapien. Integer sollicitudin pharetra massa eu vestibulum. Nam nec erat sed urna feugiat porttitor eu nec enim. Vivamus tempus lacinia augue, ut vulputate risus tristique in. Morbi tincidunt hendrerit nisl, sit amet porttitor diam congue non. Sed condimentum urna sit amet rutrum aliquet.
    `;

  const titlePath =
    path.pathname === '/tracking' ? 'Rastreamento' : 'Envio e Prazo de Entrega';

  return <BasePage title={titlePath} text={text} />;
};

export default Tracking;
