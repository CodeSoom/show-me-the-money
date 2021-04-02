import React from 'react';

import { render, screen } from '@testing-library/react';

import ApartmentScreen from './ApartmentScreen';

describe('ApartmentScreen', () => {
  it('renders apartments', () => {
    const params = { id: 'riverside' };

    render((
      <ApartmentScreen params={params} />
    ));

    expect(screen.getByText('거주하고 싶은신 아파트를 선택해주세요')).toBeInTheDocument();

    expect(screen.getByRole('link', {
      name: '한강 뷰',
    })).toBeInTheDocument();
    expect(screen.getByRole('link', {
      name: '우수 상권',
    })).toBeInTheDocument();

    expect(screen.getByText('riverside')).toBeInTheDocument();
  });
});
