import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className='about-me'>
            <div className='about-me-container'>
                <div className='about-me-header border'>
                    <img className='me-img' src='/src/assets/imgs/pikachu.gif' alt='pixil-me.png'/>
                    <h1>About Me</h1>
                </div>
                <div className='border'>
                    <ul>
                        <li><span className='font-mindset'>name:</span> kettchup (Sarah)</li>
                        <li><span className='font-mindset'>pronouns:</span> she/her/hers</li>
                        <li><span className='font-mindset' style={{fontSize: 19}}>fav colour:</span> <span style={{color: 'pink'}}>pink</span></li>
                        <li><span className='font-mindset' style={{fontSize: 19}}>fav animals:</span> bunnies and my dog Tess!</li>
                    </ul>
                </div>
                <div className='border'>
                    <h2 className='font-mindset'>
                        programming:
                    </h2>
                    <p>
                        <img src='/src/assets/imgs/computer9.gif'/> I enjoy front-end web development, and my favourite to use currently is React because components allow for better organization and shorter files which is helpful when you're someone who gets confused by lots of information at once like me :P. Also have just started using TypeScript with it, and it's so convenient in catching mistakes during the development process.
                    </p>
                    <p>
                        Recently, I've been trying to branch out and learn Node.js and Java Spring Boot to have a better understanding of all the levels of web development. It's difficult, but I'm starting to get the hang of it! <img src='src/assets/imgs/bunny46.gif' />
                    </p>
                </div>
                <div className='border'>
                    <h2 className='font-mindset'>
                        games i've been playing:
                    </h2>
                    <ul>
                        <li>honkai star rail <img src='/src/assets/imgs/star100.gif' /></li>
                        <ul>
                            <li className='nestedListItem'>my friend rolled acheron for me in only 23 rolls!!!</li>
                        </ul>
                        <li>stardew valley</li>
                        <li>don't starve together</li>
                        <ul>
                            <li className='nestedListItem'>i like growing giant crops <img src='/src/assets/imgs/carrot2.gif' /></li>
                        </ul>
                        <li>apex</li>
                    </ul>
                </div>
                <div className='border'>
                    <h2 className='font-mindset'>
                        recent songs:<img src='/src/assets/imgs/musicnotes.gif'/>
                    </h2>
                    <ul>
                        <li>illit - magnetic</li>
                        <li>soda - qwer</li>
                        <li>next stop - iu</li>
                        <li>this is home - cavetown</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
