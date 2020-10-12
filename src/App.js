import React from 'react';
import Contact from './components/Contact'


function App() {
  const walid = {
    name: "nemri walid",
    image: "https://pm1.narvii.com/7070/aeaeadea89d89327a8e5f4f83d10272dc337425fr1-1200-1200v2_128.jpg",
    online: false,
  }

  const brad = {
    name: "brad",
    image: "https://randomuser.me/api/portraits/med/men/75.jpg",
    online: true,

  }

  const yusuke = {
    name: "yusuke",
    image: "https://randomuser.me/api/portraits/med/men/76.jpg",
    online: true,
    
  }
  return (
    <div className="App">
      <Contact user={walid} />
      <Contact user={brad}/>
      <Contact user={yusuke}/>
    </div>
  );
}



export default App;
