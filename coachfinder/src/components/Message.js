import React from 'react';
import Navbar from './navbar';
import MessageForm from './MessageForm';
import Footer from './footer';

function Message() {
  return (
    <div className="bg-other">
      <Navbar />
      <main className="blur-effect">
        <MessageForm />
      </main>
      <Footer />
    </div>
  );
}

export default Message;