import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function LastUser() {
  const [lastUser, setLastUser] = useState([]);
  useEffect(() => {
    console.log("%cse monto el componente", "color: green");
    fetch("/api/users")
      .then((result) => result.json())
      .then((data) => {
        setLastUser(data.data[data.data.length - 1]);
      });
  }, []);

  useEffect(() => {
    console.log("%cse actualizo el componente", "color: blue");
  }, [lastUser]);

  useEffect(() => {
    return () => console.log("%cse desmonto el componente", "color: red");
  });

  return (
    <div className="lastUser-box">
        <div className="lastUser-top">
        <p className="lastUser-id">Id</p>
        <p className="lastUser-name">{lastUser.id}</p>
        <p className="lastUser-title">Nombre</p>
        <p className="lastUser-name">{lastUser.name}</p>
        <p className="lastUser-title">Email</p>
            <p className="lastUser-email">{lastUser.email}</p>
        </div>
        <div className="lastUser-boxContent">
        <p className="lastUser-image">Imagen</p>
             <img
                    src={`${lastUser.thumbnail}`}
              
                    style={{ width: "25%" }}
              />
            <div className="lastUser-bottom">
              <Link
                    to={`/userDetail/${lastUser.id}`}
                    style={{ textDecoration: "none", color: "white" }}
              >
                    Visitá su perfil
              </Link>
            </div>
        </div>
    </div>
);
}
export default LastUser;