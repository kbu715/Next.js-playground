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
            <em>This page is about.</em><br/>
            </p>

        </div>
    )
}

export default about
