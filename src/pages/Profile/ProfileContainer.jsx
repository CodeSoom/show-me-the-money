import React from 'react';

import { useSelector } from 'react-redux';

import { get } from '../../utils/utils';

import Profile from './Profile';

export default function ProfileContainer({ onClickNewProfile }) {
  const profile = useSelector(get('userFields'));

  return (
    <article>
      <Profile
        profile={profile}
        onClickNewProfile={onClickNewProfile}
      />
    </article>
  );
}