import "./styles.css";
import React, {useState, useEffect} from "react";
import List from "./List/List";


export default function App() {
    const [users, setUsers] = useState([]);
    const [value, setValue] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect( () => {
        fetch("https://randomuser.me/api/?results=50").then(resp => resp.json()).then((response) => {
            if(response.results) {

                const users = response.results.map((user) => {
                    return {
                        id: user.login.uuid,
                        name: `${user.name.first} ${user.name.last}`,
                        email: user.email,
                        picture: user.picture.large
                    }
                });
                setUsers(users);
                setFilteredUsers(users);
            }
        });


    }, []);


    function onChange(event) {
        const targetValue = event.target.value;
        const result = users.filter((user) => {
            return user.name.includes(targetValue) || user.email.includes(targetValue);
        });
        setFilteredUsers(result)
        setValue(targetValue);
    }

  return (
    <div className="App">
      <h1>Random users</h1>
        <p>Filter:</p>

        <input
            type="text"
            value={value}
            onChange={(event) => onChange(event)}
            placeholder="Input name or email to filter results"
            className="Input"
        />
        {filteredUsers.length === 0 && <p>No results</p>}
        <List list={filteredUsers} />
    </div>
  );
}
