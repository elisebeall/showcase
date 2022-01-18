import '../css/Boxes.css';
import { Fragment, useContext } from 'react';
import { useParams } from 'react-router-dom'
import { CraftContext } from '../contexts/CraftContext';
import { LaunchersContext } from '../contexts/LaunchersContext';
import SingleBox from './SingleBox';

const Boxes = () => {
  const type = useParams().type;
  const { spacecraft } = useContext(CraftContext);
  const { launchers } = useContext(LaunchersContext);

  return type.includes('spacecraft') ?
    (
      <>
        {spacecraft.map(craft => <SingleBox craft={craft} key={craft.id}/>)}
      </>
    ) : (
      <>
        {launchers.map(craft => <SingleBox craft={craft} key={craft.id}/>)}
      </>
    )
}

export default Boxes;
