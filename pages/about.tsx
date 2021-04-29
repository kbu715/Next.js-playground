import { useContext } from 'react';
import Meta from '../components/Meta'
import ClickContext from '../context/click';


const about = () => {

  const [clickAmount, increment] = useContext(ClickContext);

    return (
        <div>
            <Meta title='About' />
            <h1>About</h1>
            <p style={{textAlign: 'center'}}>
            You clicked the button<br/> <strong>{clickAmount}</strong><br/> times.<br/>
            <em>This page is about.</em><br/>
            <button onClick={increment}>
                Click me!
            </button>
            </p>

        </div>
    )
}

export default about
