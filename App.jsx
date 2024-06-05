import React from 'react';
import Card from './Card';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background: #f4f4f9;
  margin-top: 145px;  // Corrected margin-top
  margin-left: 300px;
`;

const users = [
  {
    name: 'Dhruven Gohel',
    title: 'HR Manager',
    bgImage: 'https://images.unsplash.com/photo-1710319412580-ee88720571cb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    social: {
      facebook: 'https://facebook.com/johndoe',
      instagram: 'https://instagram.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe'
    },
    stats: {
      followers: '9.91k',
      following: '1.95k',
      posts: '9.12k'
    }
  },
  {
    name: 'Shrishti Engg',
    title: 'Data Analyst',
    bgImage: 'https://images.unsplash.com/photo-1506765515384-028b60a970df',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    social: {
      facebook: 'https://facebook.com/janesmith',
      instagram: 'https://instagram.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith'
    },
    stats: {
      followers: '1.95k',
      following: '9.12k',
      posts: '6.98k'
    }
  },
  {
    name: 'Dev Patel',
    title: 'Legal Counsel',
    bgImage: 'https://plus.unsplash.com/premium_photo-1691852518353-24256e1adb2c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    social: {
      facebook: 'https://facebook.com/michaelbrown',
      instagram: 'https://instagram.com/michaelbrown',
      linkedin: 'https://linkedin.com/in/michaelbrown',
      twitter: 'https://twitter.com/michaelbrown'
    },
    stats: {
      followers: '9.12k',
      following: '6.98k',
      posts: '8.49k'
    }
  },
  {
    name: 'Janki Patel',
    title: 'Software Engineer',
    bgImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    social: {
      facebook: 'https://facebook.com/emilydavis',
      instagram: 'https://instagram.com/emilydavis',
      linkedin: 'https://linkedin.com/in/emilydavis',
      twitter: 'https://twitter.com/emilydavis'
    },
    stats: {
      followers: '5.32k',
      following: '1.32k',
      posts: '4.12k'
    }
  },
  {
    name: 'Vanshika Modi',
    title: 'Product Manager',
    bgImage: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    social: {
      facebook: 'https://facebook.com/christopherlee',
      instagram: 'https://instagram.com/christopherlee',
      linkedin: 'https://linkedin.com/in/christopherlee',
      twitter: 'https://twitter.com/christopherlee'
    },
    stats: {
      followers: '6.45k',
      following: '3.12k',
      posts: '5.78k'
    }
  },
  {
    name: 'Raj Yadav',
    title: 'Marketing Specialist',
    bgImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    social: {
      facebook: 'https://facebook.com/oliviamartinez',
      instagram: 'https://instagram.com/oliviamartinez',
      linkedin: 'https://linkedin.com/in/oliviamartinez',
      twitter: 'https://twitter.com/oliviamartinez'
    },
    stats: {
      followers: '7.32k',
      following: '4.65k',
      posts: '6.32k'
    }
  },
  {
    name: 'Harshil Prajapati',
    title: 'UX Designer',
    bgImage: 'https://images.unsplash.com/photo-1614094082869-cd4e4b2905c7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    social: {
      facebook: 'https://facebook.com/davidwilson',
      instagram: 'https://instagram.com/davidwilson',
      linkedin: 'https://linkedin.com/in/davidwilson',
      twitter: 'https://twitter.com/davidwilson'
    },
    stats: {
      followers: '8.21k',
      following: '2.34k',
      posts: '7.45k'
    }
  },
  {
    name: 'Maitry Panchal',
    title: 'Business Analyst',
    bgImage: 'https://images.unsplash.com/photo-1542744095-291d1f67b221',
    avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
    social: {
      facebook: 'https://facebook.com/sophiajohnson',
      instagram: 'https://instagram.com/sophiajohnson',
      linkedin: 'https://linkedin.com/in/sophiajohnson',
      twitter: 'https://twitter.com/sophiajohnson'
    },
    stats: {
      followers: '5.78k',
      following: '3.45k',
      posts: '4.89k'
    }
  },
  {
    name: 'Vidhi Pankhaniya',
    title: 'Content Creator',
    bgImage: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    social: {
      facebook: 'https://facebook.com/danieltaylor',
      instagram: 'https://instagram.com/danieltaylor',
      linkedin: 'https://linkedin.com/in/danieltaylor',
      twitter: 'https://twitter.com/danieltaylor'
    },
    stats: {
      followers: '9.11k',
      following: '6.34k',
      posts: '9.78k'
    }
  }
];

function App() {
  return (
    <AppContainer>
      {users.map(user => (
        <Card key={user.name} user={user} />
      ))}
    </AppContainer>
  );
}

export default App;

