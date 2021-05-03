import { useEffect, useState } from "react";
import "./App.css";
import ContactCard from "./ContactCard";

function App() {
  // const contacts = [
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Jenny Lane",
  //     email: "jennylane@gmail.com",
  //     age: 25,
  //   },
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "John Doe",
  //     email: "johndoe@gmail.com",
  //     age: 28,
  //   },
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Josh Chan",
  //     email: "joshchan@gmail.com",
  //     age: 22,
  //   },
  // ];

  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResults(data.results)
      });
  }, []);

  return (
    <div className="App">
      <h1>Simple Random User Card</h1>
      {results.map((result, index) => {
        return (
          <ContactCard
            key={index}
            avatarUrl={result.picture.large}
            name={result.name.first}
            email={result.email}
            age={result.dob.age}
          />
        );
      })}
    </div>
  );
}
export default App;
