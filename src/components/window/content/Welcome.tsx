import './Welcome.css'

const Welcome = () => {
    return (
        <div className='welcome'>
            <div className='welcome-container'>
                <div className='welcome-header'>
                    <div className='dog-div'>
                        <img className='dog' src='./src/assets/imgs/dog-wagging-tail-white-dog.gif'/>
                    </div>
                    <h1>Welcome to kettchup's pc!</h1>
                </div>
                <p>Hi hi hi!! I'm kettchup or Sarah, and welcome to my personal website! I built this site after discovering Neocities and Nekoweb and was inspired by all the lovely creations to make my own.</p>
                <p>This site is built from scratch with React and TypeScript and is not meant for mobile. I'll slowly be adding random fun things im interested here.</p>
                <p>I hope your time spent here is fun! <img src='./src/assets/imgs/bunny25.gif' /></p>
            </div>
        </div>
    );
}

export default Welcome;
