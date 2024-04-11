import { MouseEvent, useRef, useState } from 'react';
// styles
import './Window.css'
// components - content
import AboutMe from './content/AboutMe';
import Welcome from './content/Welcome';

interface Props {
    url: string,
    closeWindow: Function,
    minimizeWindow:Function,
}

const Window = ({url, closeWindow, minimizeWindow} : Props) => {
    const [maximized, setMaximized] = useState(false);
    const windowRef = useRef<HTMLInputElement>(null);
    const offsetX = useRef(0);
    const offsetY = useRef(0);
    const drag = useRef(false);
    const positionOnClose = useRef({left: 220, top: 100})

    function getContent(url : string) {
        switch(url) {
            case 'about_me':
                return <AboutMe />
            case 'welcome':
                return <Welcome />
        }
    }

    function mouseDownHandler(event: MouseEvent) {
        if (windowRef.current && maximized == false) {
            drag.current = true;
            const window = windowRef.current.getBoundingClientRect();
            offsetX.current = event.clientX -  window.left;
            offsetY.current = event.clientY - window.top;
        }
    }

    function mouseUpHandler() {
        drag.current = false;
    }

    function mouseMoveHandler(event: MouseEvent) {
        if (drag.current && windowRef.current && maximized == false) {
            windowRef.current.style.left = `${event.clientX - offsetX.current}px`;
            windowRef.current.style.top = `${event.clientY - offsetY.current}px`;
            positionOnClose.current = {left: event.clientX - offsetX.current, top: event.clientY - offsetY.current};
        }
    }

    function getWindowStyles() {
        let styles = 'window';
        if (maximized) {
            styles += ' maximized';
        };
        console.log(styles);
        return styles;
    }


    return (
        <div style={positionOnClose.current} className={getWindowStyles()} ref={windowRef} >
            <div
                className='window-bar'
                onMouseDown={mouseDownHandler}
                onMouseUp={mouseUpHandler}
                onMouseMove={mouseMoveHandler}
            >
                <div className='window-url'>
                    <p>{'/home/kettchup/'+url}</p>
                </div>
                <div className='window-buttons'>
                    <button className='window-min' onClick={() => minimizeWindow(url)}/>
                    <button className='window-max' onClick={() => setMaximized(!maximized)}/>
                    <button className='window-close' onClick={() => closeWindow(url)}/>
                </div>
            </div>
            <div className='window-content'>
                {getContent(url)}
            </div>
        </div>
    );
}

export default Window;