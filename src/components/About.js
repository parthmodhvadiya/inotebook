import { React,useContext, useEffect } from 'react';
import { UserContext } from '../context/notes/NoteState';
const About = () => {
  const userDetails = useContext(UserContext);
  useEffect(() => {
    userDetails.update();
  })
  
  return (
    
    <div>
      I am  {userDetails.userDetails.username}
      </div>
  )
}

export default About