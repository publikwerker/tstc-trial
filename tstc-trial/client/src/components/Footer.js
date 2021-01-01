import React from 'react';

export default function Footer(props) {

  const {count} = props;

  return (
    <footer>
      <p className="footer-text">This is the footer.</p>
      <div className="row">
        <div>{count} people have visited this site.</div>
      </div>
    </footer>
  )
}