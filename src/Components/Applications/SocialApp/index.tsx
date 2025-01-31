import React, { useCallback, useState } from 'react';
import { Container } from 'reactstrap';
import UserContext from './UserContext';
import UserProfile from './UserProfile/UserProfile';

const SocialAppContainer = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabChange = useCallback((tab: number) => {
    setActiveTab(tab);
  }, []);

  return (
    <Container fluid>
      <div className='user-profile social-app-profile'>
        <UserProfile callback={handleTabChange} />
        <UserContext activeTab={activeTab} />
      </div>
    </Container>
  );
};

export default SocialAppContainer;
