import React, {useEffect} from 'react';
import { Container, Avatar } from './style';
import { GetGithubProfile } from '../../services'

export default function Header() {

  useEffect(() => {
    GetGithubProfile()
    // console.log(res);
    
  }, [])

  return (
      <Container>
        <Avatar src="https://scontent.fsdu5-1.fna.fbcdn.net/v/t1.0-9/s960x960/45731002_1912403655534586_1103986446827520000_o.jpg?_nc_cat=101&_nc_ohc=z4cWmAU1aQAAQnR1WucUAnUbjx2ZMXBp_ajzOQQLgxE9iqRNhgmzpXCKA&_nc_ht=scontent.fsdu5-1.fna&oh=37c5355c4e1101f96d0a1bd9795f3bc2&oe=5EA46817"/>
      </Container>
  );
}
