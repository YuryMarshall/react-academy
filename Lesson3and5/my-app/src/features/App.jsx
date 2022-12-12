import React from 'react';
import Header from '../ui/organisms/header/header.jsx';
import UserInfo from './components/UserInfo/UserInfo.jsx';
import Footer from '../ui/organisms/footer/footer.jsx';

function App() {
  return (
    <div className="bg-user-black h-screen">
      <Header />
      <UserInfo />
      <Footer />
    </div>
  );
}

export default App;
