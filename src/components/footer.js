import React from 'react';

function footer() {
  return (
    <div className="container">
      <footer>
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <div className="container bg-white text-success justify-content-center">
                <div className="row">
                    <div className="col-sm-3">
                        <a href="https://www.facebook.com/profile.php?id=61561467827129" className="navbar-brand"><img src="/assets/image/fb-icon.png" className="rounded" alt="fb icon" height="100px" /></a>
                    </div>
                    <div className="col-sm-3">
                        <a href="mailto:imperialmughalia2024@gmail.com" className="navbar-brand"><img src="/assets/image/email-icon.png" className="rounded" alt="email icon" height="100px" /></a>
                    </div>
                    <div className="col-sm-3">
                        <a href="https://wa.me/01580569928" className="navbar-brand"><img src="/assets/image/whatsapp-icon.png" className="rounded" alt="whatsapp icon" height="100px" /></a>
                    </div>
                    <div className="col-sm-3">
                        <a href="tel:+8807217771907" className="navbar-brand"><img src="/assets/image/phone-icon.png" className="rounded" alt="phone icon" height="100px" /></a>
                    </div>
                </div>
            </div>        
        </nav>
    </footer>
    </div>
  );
}

export default footer;