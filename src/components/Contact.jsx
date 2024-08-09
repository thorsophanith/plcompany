import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_j99x40c', 'template_62cjpir', 
        form.current, {
        publicKey: 'ovUZr5IEN3Rf2wlNY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  

  return (
    <div className='mt-6'>
        <section class="text-gray-600 body-font relative max-w-7xl m-auto">
  <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-16 flex items-end justify-start relative">
    <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3909.013165129752!2d104.90012097505344!3d11.550913088648944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDMzJzAzLjMiTiAxMDTCsDU0JzA5LjciRQ!5e0!3m2!1sen!2skh!4v1723086270066!5m2!1sen!2skh" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div class="bg-white relative flex flex-wrap py-7 rounded shadow-md mr-8 ml-8 mt-3">
        <div class="lg:w-1/2 px-5">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p class="mt-1"> No 285, Street No 271, Sangkat Tumnob Tuek, Khan Boeng Keng Kang, PhnomPenh</p>
        </div>
        <div class="lg:w-1/2 px-5 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a class="text-blue-500 leading-relaxed">mphanit787@email.com</a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p class="leading-relaxed">+855-709-817-77</p>
        </div>
      </div>
    </div>
    <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
   <form ref={form} onSubmit={sendEmail} className='p-3'>
   <h2 class="text-gray-900 text-lg mb-1 font-medium title-font text-center">Contact Us</h2>
      <p class="leading-relaxed mb-5 text-gray-600"></p>
      <div class="relative mb-4">
        <label  class="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" required name="user_name" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" required name="user_email" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label class="leading-7 text-sm text-gray-600">Message</label>
        <textarea name="message" required class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
      </div>
      <a href="/"><input id='dog5' type='submit' class="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg cursor-pointer" value='Submit' /></a>
      <p class="text-xs text-gray-500 mt-3">You can submit for send Contacts to @gmail</p>
   </form>
    </div>
  </div>
</section>
    </div>
  )
}

export default Contact