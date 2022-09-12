import { useEffect, useState } from "react";


function TotalUsers() {

    const [totalUsers, setTotalUsers] = useState([]);
    useEffect(() => {
    //   console.log("%cse monto el componente", "color: green");
      fetch("/api/users")
        .then((result) => result.json())
        .then((data) => {
          setTotalUsers(data.totalUsers);
          
        });
    }, []);
    
    useEffect(() => {
    }, [totalUsers]);
    
    
    useEffect(() => {
      return () => console.log("%cse desmonto el componente", "color: red");
    });

  return (

      <p className="total">{totalUsers}</p>
  );
}
export default TotalUsers;
