import React from 'react';
import Blogs from './Blogs';
import Stories from './Stories';
import Media from './Media';
import Collective from './Collective';
//import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default function Body () {
  return (
    <main>
      {/* <Router> */}
        <Blogs />
        <Stories />
        <Collective />
        <Media />
      {/* </Router> */}
    </main>
  )
}