import logo from './logo.svg';
import './App.css';
import ShowName from './ShowName';
import ShowGame from './ShowGame';
import ExamLibrary from './Library';
import Hoc from './Hoc';
import UserPersonalInfo from './ExampleUserInfo/UserPersonal';
import UserProfessionalInfo from './ExampleUserInfo/UserProfessionalInfo';
import UserObContext from './UserObContext';
import Hobbies from './Hobbies/Hobbies';
function App() {
  // const StudentName = Hoc(ShowName);
  // const StdentGame = Hoc(ShowGame);
  const userOb = {
    personal: { name: "Karhit", phoneNo: 99919212 },
    professional: { company: "Westsideagile", designation: "Engineer" },
  };

  return (
    <div className="App">
      <Hobbies></Hobbies>
      {/* 
      <UserObContext.Provider value={userOb}>
        <UserPersonalInfo></UserPersonalInfo>
        <UserProfessionalInfo ></UserProfessionalInfo>
      </UserObContext.Provider> */}
      {/*
      <StudentName></StudentName>
      <StdentGame></StdentGame>
      <ExamLibrary></ExamLibrary> */}
    </div>
  );
}

export default App;
