import { getImageUrl } from "./Utils";
import { people } from "./PersonData";

const PersonList = () => {
  const chemists = people.filter((person) => person.profession === "chemist");
  const everyOneElse = people.filter(
    (person) => person.profession !== "chemist"
  );

  return (
    <div>
      <h1>Scientists</h1>
      <h3>Chemists</h3>
      <ul>
        {chemists.map((person) => (
          <li key={person.id} style={{ display: "flex" }}>
            <img src={getImageUrl(person)} alt={person.name} />
            <h5>{person.name} : </h5>
            <p>{person.profession}</p>
            <p>{person.accomplishment}</p>
          </li>
        ))}
      </ul>
      <h3>Every One Else</h3>
      <ul>
        {everyOneElse.map((person) => (
          <li key={person.id} style={{ display: "flex", alignItems: "center" }}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name} :</b>
              {person.profession} know for
              {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonList;
