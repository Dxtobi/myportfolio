import { useState } from 'react';

export const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  return (
    <div className="">
      <form>
        <div className="input-area-text">
          <label>Email | </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="joseph@gmail.com"
            className="bg-transparent outline-none border-none dark:text-white flex-1 ml-1"
          />
        </div>
        <div className="input-area-textarea">
          <textarea
            type="email"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="send a message"
            className="bg-transparent outline-none border-none dark:text-white flex-1"
          />
        </div>
      </form>
      <div>
        <button type="button" className="contact_btn w-[50%]:">Send</button>
      </div>
    </div>
  );
};
