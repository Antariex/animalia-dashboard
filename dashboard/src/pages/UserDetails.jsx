import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";


function UserDetail() {
  const [user, setUser] = useState([]);
  const params = useParams();
  const userId = params.id;

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then((result) => result.json())
      .then((data) => {
        setUser(data.data);
      });
  }, []);

  useEffect(() => {}, [user]);

  useEffect(() => {
    return () => console.log("%cse desmonto el componente", "color: red");
  });

  return (
    <div className="container mt-5">
        <div className="row justify-content-center ">
        <div className="col-12" align="center">
      <Card className="align-items-center" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`${user.thumbnail}`} style={{ width: "12rem" }} />
        <Card.Body>
          <Card.Title className="rounded p-2" style={{ backgroundColor: "#AD1357", color: "white" }}>Perfil de usuario</Card.Title>
          <Card.Text>{user.name} {user.user}</Card.Text>
          <Card.Text>{user.email}</Card.Text>
        </Card.Body>
      </Card>
      </div> 
      </div>
    </div>
  );
}
export default UserDetail;