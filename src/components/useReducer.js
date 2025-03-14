const { useReducer } = require("react");

const firstUser = {
  id: "0391-3233-3201",
  firstName: "Bill",
  lastName: "Wilson",
  city: "Mossoula",
  state: "Montana",
  email: "bwilson@mtnwilsons.com",
  adnim: false,
};

/*
function User() {
  const [user, setUser] = useState(firstUser);

  return (
    <div>
      <h1>
        {user.firstName} {user.lastName} - {user.adnim ? "Admin" : "User"}
      </h1>
      <p>Email: {user.email}</p>
      <p>
        Location: {user.city}, {user.state}
      </p>
      <button
        onClick={() => {
          setUser({ ...user, admin: true });
        }}
      >
        Make Admin
      </button>
    </div>
  );
}
*/

function User() {
  const [user, setUser] = useReducer(
    (user, newDetails) => ({ ...user, newDetails }),
    firstUser
  );

  return (
    <div>
      <h1>
        {user.firstName} {user.lastName} - {user.adnim ? "Admin" : "User"}
      </h1>
      <p>Email: {user.email}</p>
      <p>
        Location: {user.city}, {user.state}
      </p>
      <button
        onClick={() => {
          setUser({ admin: true });
        }}
      >
        Make Admin
      </button>
    </div>
  );
}
