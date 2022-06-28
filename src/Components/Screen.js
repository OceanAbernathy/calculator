import { Textfit } from 'react-textfit';
import './Screen.css';

const Screen = ({ value }) => {
  return (
    <Textfit className='calculator__screen' mode='single' max={95}>
      {value}
    </Textfit>
  );
};

export default Screen;
