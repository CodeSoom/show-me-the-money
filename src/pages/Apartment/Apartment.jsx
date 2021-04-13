import React from 'react';

export default function Apartment({ apartment }) {
  const {
    name,
    district,
    size,
  } = apartment;

  return (
    <dl>
      <dd>아파트명:</dd>
      <dt>{name}</dt>
      <dd>법정동:</dd>
      <dt>{district}</dt>
      <dd>전용면적:</dd>
      <dt>{size}</dt>
    </dl>
  );
}