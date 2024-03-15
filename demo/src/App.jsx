import Header from "./components/Header/Header";
import Parent from "./components/Parent/Parent";
import Body from "./components/Body/Body";
import Notes from "./components/Notes/Notes";
import Data from "./components/Data";
import { useState } from "react";
import Modal from "./components/Modal/Modal";

function App() {
  const [notes, setNotes] = useState(Data);
  const [isOpen, setIsOpen] = useState(false);
  function handleDelete(value) {
    const newData = notes.filter((_, index) => index !== value);
    setNotes(newData);
  }
  function handleChange(title, description) {
    const newAddedValue = [...notes, { title, description }];
    setNotes(newAddedValue);
  }
  return (
    <>
      <Parent>
        {isOpen && <Modal onClick={setIsOpen} handleChange={handleChange} />}
        <Header onClick={setIsOpen} />
        <Body>
          <Notes data={notes} deleteData={handleDelete} />
        </Body>
      </Parent>
    </>
  );
}

export default App;
