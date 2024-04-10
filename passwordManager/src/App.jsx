import './App.css'
import Parent from './components/Parent/Parent'
import DataContainer from './components/DataContainer/DataContainer'
import InputContainer from './components/InputContainer/InputContainer'
import Navbar from './components/Navbar/Navbar'
import { useEffect, useState } from 'react'

function App() {

  const [userData,setUserData] = useState([])

  function handleClicks(webName, userName,password){
    const existingPasswords = JSON.parse(localStorage.getItem('passwords')) || [];
    const userData = { webName, userName, password };
    const updatedPasswords = [...existingPasswords, userData];
    localStorage.setItem('passwords', JSON.stringify(updatedPasswords));

    setUserData(updatedPasswords)
  }
  useEffect(() => {
    const savedPasswords = JSON.parse(localStorage.getItem('passwords')) || [];
    setUserData(savedPasswords);
  }, []);

  function handleDeleteBtn(index){
    const val = userData.filter((_, i) => i !== index);
    setUserData(val)
    localStorage.setItem('passwords', JSON.stringify(val));
  }
  function handleCopy(pass){
    const textToCopy = pass
    navigator.clipboard.writeText(textToCopy)
      .then(() => alert('Copied to clipboard'))
      .catch((error) => console.error('Unable to copy:', error));
  }

  return (
    <Parent>
      <Navbar />
      <InputContainer handleClicks={handleClicks} />
      <DataContainer data={userData} deleteFild={handleDeleteBtn} copyBtn={handleCopy} />
    </Parent>
  )
}

export default App
