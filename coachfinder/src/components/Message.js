import React from 'react';
import {NavBar} from './navbar';
import MessageForm from './MessageForm';
import {FooterComponent} from './footer';

function Message() {
  return (
    <div className="bg-other">
      <NavBar />
      <main className="blur-effect">
        <MessageForm />
      </main>
      <FooterComponent />
    </div>
  );
}

export default Message;