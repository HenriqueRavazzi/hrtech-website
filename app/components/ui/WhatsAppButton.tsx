import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '5541999590006';
  const message = encodeURIComponent('Olá, vim do seu site e gostaria de conversar sobre um projeto que estou pensando!');
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1.2-11.4l-1.6 3.2c-.2.4.2.8.6.8h.8c.4 0 .8-.2.8-.6l.4-1.4c.2-.4.6-.6 1-.6s.8.2 1 .6l.4 1.4c0 .4.4.6.8.6h.8c.4 0 .8-.4.6-.8l-1.6-3.2c-.2-.4-.6-.6-1-.6s-.8.2-1 .6z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;