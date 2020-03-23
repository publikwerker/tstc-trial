import React from 'react';
import Blogs from './Blogs';
import Stories from './Stories';
import Media from './Media';
import Collective from './Collective';

export default function Body () {
  return (
    <main>
      <Blogs />
      <Stories />
      <Collective />
      <Media />
    </main>
  )
}