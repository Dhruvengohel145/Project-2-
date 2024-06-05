import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 20px;
  width: 300px;
`;

const BackgroundImage = styled.div`
  height: 150px;
  background-size: cover;
  background-position: center;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid white;
  margin-top: -50px;
`;

const UserInfo = styled.div`
  text-align: center;
  padding: 20px;
`;

const UserName = styled.h2`
  margin: 0;
`;

const UserTitle = styled.h4`
  margin: 0;
  color: gray;
`;

const UserStats = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
`;

const Stat = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 1.2em;
  font-weight: bold;
`;

const StatLabel = styled.div`
  color: gray;
`;

function Card({ user }) {
  return (
    <CardContainer>
      <BackgroundImage style={{ backgroundImage: `url(${user.bgImage})` }} />
      <UserInfo>
        <Avatar src={user.avatar} alt={`${user.name}'s avatar`} />
        <UserName>{user.name}</UserName>
        <UserTitle>{user.title}</UserTitle>
        <UserStats>
          <Stat>
            <StatNumber>{user.stats.followers}</StatNumber>
            <StatLabel>Followers</StatLabel>
          </Stat>
          <Stat>
            <StatNumber>{user.stats.following}</StatNumber>
            <StatLabel>Following</StatLabel>
          </Stat>
          <Stat>
            <StatNumber>{user.stats.posts}</StatNumber>
            <StatLabel>Posts</StatLabel>
          </Stat>
        </UserStats>
      </UserInfo>
    </CardContainer>
  );
}

export default Card;
