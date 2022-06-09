import React from 'react';

import { NewsHeader } from '../../components/NewsHeader/NewsHeader';

export const Home : React.FC = () => {

  return (
      <NewsHeader title="Общие новости" category="news" />
  );
}
