import { useState, useEffect, useRef } from 'react';
// stylesheet
import './App.css';
// fonts
import './fonts/Web437_NEC_APC3_8x16.woff';
import './fonts/Web437_Mindset.woff';
// assets

// components
import Icon from './components/icon/Icon';
import Window from './components/window/Window';

function App() {
  // about_me states
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [aboutMeOpened, setAboutMeOpened] = useState(false);
  // welcome states
  const [showWelcome, setShowWelcome] = useState(true);
  const [welcomeOpened, setWelcomeOpened] = useState(true);

  // active window
  const [windowOnTop, setWindowOnTop] = useState('welcome');

  // start menu
  const [showStartMenu, setShowStartMenu] = useState(false);
  const startMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  const handleOutsideClick = (e : MouseEvent) => {
    if (startMenuRef.current && !startMenuRef.current.contains(e.target as Node)) {
      setShowStartMenu(false);
    }
  };

  function openWindow(window : string) {
    switch(window) {
      case 'welcome':
        setShowWelcome(true);
        setWelcomeOpened(true);
        setWindowOnTop('welcome');
        break;
      case 'about_me':
        setShowAboutMe(true);
        setAboutMeOpened(true);
        setWindowOnTop('about_me');
        break;
    }
    
  }

  function closeWindow(window : string) {
    switch(window) {
      case 'welcome':
        setShowWelcome(false);
        setWelcomeOpened(false);
        break;
      case 'about_me':
        setShowAboutMe(false);
        setAboutMeOpened(false);
        break;
    }
  }

  function minimizeWindow(window : string) {
    switch(window) {
      case 'welcome':
        setShowWelcome(false);
        break;
      case 'about_me':
        setShowAboutMe(false);
        break;
    }
  }

  function showWindowStyle(showState : boolean, window : string) {
    let styles = '';
    if (showState==false) {
      styles += 'display-none ';
    }
    if (windowOnTop == window) {
      styles += 'onTop';
    }
    return styles;
  }

  function taskbarLinkOnClick(window : string) {
    switch(window) {
      case 'welcome':
        setShowWelcome(true);
        setWindowOnTop('welcome');
        break;
      case 'about_me':
        setShowAboutMe(true);
        setWindowOnTop('about_me');
        break;
    }
  }
  
  return (
    <div className='App'>
      <div className='desktop'>
        <div className='scanlines' />
        <div className='desktop-icons'>
          <div className='welcome-icon' onClick={() => openWindow('welcome')}>
            <Icon img='/src/assets/icons/msie2-2.png' name='welcome' />
          </div>
          <div className='about-me-icon' onClick={() => openWindow('about_me')}>
            <Icon img='assets/icons/notepad_file-2.png' name='about_me' />
          </div>
        </div>
        <div className='desktop-windows'>
          {welcomeOpened ?
            <div className={showWindowStyle(showWelcome, 'welcome')} onMouseDown={() => setWindowOnTop('welcome')}>
              <Window url='welcome' closeWindow={closeWindow} minimizeWindow={minimizeWindow} />
            </div> : null}
          {aboutMeOpened ? 
          <div className={showWindowStyle(showAboutMe, 'about_me')} onMouseDown={() => setWindowOnTop('about_me')}>
            <Window url='about_me' closeWindow={closeWindow} minimizeWindow={minimizeWindow} />
          </div> : null}
        </div>
        <div className='desktop-taskbar'>
          <button className={showStartMenu ? 'start-button start-button-active' : 'start-button'} onClick={() => setShowStartMenu(!showStartMenu)}><img src='/src/assets/imgs/my-melody.webp'/>Start</button>
          <div className='taskbar-links'>
            {welcomeOpened ? <button className={showWelcome ? 'link-open' : 'link-minimized'} onClick={() => taskbarLinkOnClick('welcome')}>welcome</button> : null}
            {aboutMeOpened ? <button className={showAboutMe ? 'link-open' : 'link-minimized'} onClick={() => taskbarLinkOnClick('about_me')}>about me</button> : null}
          </div>
          <div className='desktop-startmenu' ref={startMenuRef}>
            {showStartMenu ? 
              <div className='startMenu'>
                <div className='startMenu-link' onClick={() => {openWindow('welcome'); setShowStartMenu(false)}}>
                    <img src='/src/assets/icons/msie2-2.png'/>
                    <p>welcome</p>
                </div>
                <div className='startMenu-link' onClick={() => {openWindow('about_me'); setShowStartMenu(false)}}>
                    <img src='/src/assets/icons/notepad_file-2.png' />
                    <p>about me</p>
                </div>
              </div> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
