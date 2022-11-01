import { useEffect, useState } from "react";

export default function Team() {

  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/team')
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          setTeam(data);
        setLoading(false);
        }, 2000);
      })
  }, []);

  

  return (
    <>
      <h1 className="text-2xl font-bold mt-3 ml-3">Team</h1>
      <span className="text-sm">gestion des membres de l'équipe</span>
      {loading && <h1>Loading...</h1>}

      {!loading && team.map(member => (
        <div key={member.id}>
          <h1>{member.name}</h1>
          <h2>{member.title}</h2>
          <p>{member.bio}</p>
        </div>
      ))}

    </>
  )
}
