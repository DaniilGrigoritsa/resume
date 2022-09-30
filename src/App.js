import { Form } from './pages/resume.js';
import { useState } from 'react';
import { copyAddress } from './scripts/copyToClipboard.js';
import './App.css';

import linkedIn from './media/linkedInLogo.png';
import github from './media/githubLogo.png';
import twitter from './media/twitterLogo.png';
import telegram from './media/telegramLogo.png';
import copyImage from './media/copy.png';
import metamask from './media/metamask.png';


function App() {

  const [copied, setCopied] = useState(false);

  return (
    <div>
      <header>
        <h2>Contact me:</h2>
        <ul>
          <li><a href='https://github.com/DaniilGrigoritsa'><img src={github} alt='GitHub'/></a></li>
          <li><a href='https://www.linkedin.com/in/danil-grigori%C8%9Ba-47525624a/'><img src={linkedIn} alt='LinkedIn'/></a></li>
          <li><a href=''><img src={twitter} alt='Twitter'/></a></li>
          <li><a href=''><img src={telegram} alt='Telegram'/></a></li>
        </ul>
      </header>
      <Form />
      <footer>
        <img className='metamask' src={metamask}></img>
        <img className='copy' onClick={() => {
            copyAddress();
            setCopied(true);
          }} src={copyImage}></img>
        <h4>0x151...691CCB</h4>
      </footer>
    </div>
  )
}

export default App;
