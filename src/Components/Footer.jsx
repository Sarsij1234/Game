import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-white font-bold mb-4 underline">About Us</h4>
          <p>Desinged this using React. This is fully responsive. It is a single user game.Here we get the default ramdom inputs from system.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 underline">Contact Us</h4>
          <ul>
            <li>Email: sarsijupadhyay66@gmail.com</li>
            <li>Phone: +9140935896</li>
            <li>Address: Ayodhya, U.P, India</li>
          </ul>
        </div>
       
        
      </div>
      <div className="container mx-auto text-center mt-6 border-t border-gray-700 pt-4">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
