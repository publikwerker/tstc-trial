import React from 'react';

export default function Footer(props) {

  const {count} = props;

  return (
    <footer>
      <div className="row">
        <div className="ticker count">{count} people have visited this site.</div>
      </div>
    <p className="footer-text">All content Copyright &copy; 2021 Publikwerks, LLC</p>
    </footer>
  )
}