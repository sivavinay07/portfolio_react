import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 text-center bg-transparent">
      <h2 className="section-title section-header text-white text-4xl font-bold mb-6">
        CONTACT ME
      </h2>
      <div className="form-container">
        <form action="https://formspree.io/f/mzzajllv" method="POST">
          <label htmlFor="name">
            Name:
            <input type="name" name="name" id="name" />
          </label>
          <label htmlFor="email">
            Email:
            <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="message">
            Your message:
            <textarea name="message" id="message"></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="flex justify-center gap-10 mt-8 text-3xl">
        <a href="https://github.com/sivavinay07" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 hover:drop-shadow-[0_0_10px_rgba(156,163,175,0.8)] transition duration-300">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.instagram.com/_siva_vinay_07/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)] transition duration-300">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/siva-vinay/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] transition duration-300">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
