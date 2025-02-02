import React from 'react';
import Id from '../assets/person.png';

const Footer = () => {
  return (
    <footer className="mt-10 mb-10 px-5">
      <div className="flex flex-col md:flex-row justify-between items-start">
        
        {/* Left Section */}
        <div id="left" className="pl-5 flex flex-col gap-6">
          <div className="flex flex-wrap gap-10">
            
            {/* Column 1 */}
            <div className="flex flex-col items-center gap-2">
              <h3 className="text-lg font-semibold">Find a Store</h3>
              <a href="#" className="text-sm p-2 hover:underline hover:underline-offset-3">Become a Member</a>
              <a href="#" className="text-sm p-2 hover:underline hover:underline-offset-3">Sign Up for Email</a>
              <a href="#" className="text-sm p-2 hover:underline hover:underline-offset-3">Send Us Feedback</a>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center gap-2">
              <h3 className="text-lg font-semibold">Get Help</h3>
              <a href="#" className="text-sm p-2 hover:underline hover:underline-offset-3">Order Status</a>
              <a href="#" className="text-sm p-2 hover:underline hover:underline-offset-3">Delivery</a>
              <a href="#" className="text-sm p-2 hover:underline hover:underline-offset-3">Payment Options</a>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center gap-2">
              <h3 className="text-lg font-semibold">About Us</h3>
              <a href="#" className="text-sm p-2 hover:underline hover:underline-offset-3">News</a>
              <a href="#" className="text-sm p-2 hover:underline hover:underline-offset-3">Careers</a>
              <a href="#" className="text-sm p-2 hover:underline hover:underline-offset-3">Investors</a>
            </div>

          </div>

          {/* Country Section */}
          <div id="btm" className="ml-5 w-10">
            <a href="#" className="text-sm flex items-center gap-2">
              <img src={Id} alt="Country Icon" className="w-6 h-6" />
              Pakistan
            </a>
          </div>
        </div>

        {/* Right Section - Social Links */}
        <div id="right">
          
          {/* Social Media Links */}
          <div id="online" className="flex gap-4 text-lg font-bold">
            <a href="#" className="p-2 hover:underline hover:underline-offset-3">Facebook</a>
            <a href="#" className="p-2 hover:underline hover:underline-offset-3">Twitter</a>
            <a href="#" className="p-2 hover:underline hover:underline-offset-3">YouTube</a>
            <a href="#" className="p-2 hover:underline hover:underline-offset-3">Instagram</a>
          </div>

          {/* Footer Links */}
          <div className="policy flex flex-wrap justify-center  text-sm">
            <a href="#" >Guide</a>
            <a href="#" >Terms of Sale</a>
            <a href="#" >Terms of Use</a>
            <a href="#" >Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
