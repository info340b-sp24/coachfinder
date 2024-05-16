import React from 'react';

function MessageForm() {
  return (
    <div className="container">
      <div id="message" className='message'>
        <div className="container-fluid">
          <h1 className="text-Kaushan text-white my-5">Send a Message to Your Coach Here:</h1>
          <form>
            <div className="mb-5">
              <label htmlFor="name-input" className="form-label text-Kaushan text-white fs-2">Send to:</label>
              <input type="email" className="form-control" id="name-input" placeholder="Enter Your Coach/Client's Email Address" />
            </div>
            <div className="form-group">
              <label htmlFor="text-input" className="message-to text-Kaushan text-white fs-2">Message:</label>
              <textarea className="form-control" rows="5" id="text-input" placeholder="Type in your Message Here"></textarea>
            </div>
            <div className="text-center mt-5 mb-5">
              <button type="submit" className="btn btn-primary btn-orange">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MessageForm;
