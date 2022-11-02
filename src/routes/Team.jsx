import { useEffect, useState } from "react";

export default function Team() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [links, setLinks] = useState({});

  useEffect(() => {
    fetchTeam("http://localhost:3000/team?_page=1&_limit=13");
  }, []);

  const fetchTeam = async (url) => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        setLinks(extractLinks(res.headers.get("link")));
        return res.json();
      })
      .then((data) => {
        setTimeout(() => {
        setTeam(data);
        setLoading(false);
        }, 1000);
      });
  };


  function extractLinks(links) {
    let res = {};

    links.split(", ").map((link) => {
      if (link.includes('rel="next"')) {
        res.next = link.split("; ")[0].slice(1, -1);
      } else if (link.includes('rel="prev"')) {
        res.prev = link.split("; ")[0].slice(1, -1);
      } else if (link.includes('rel="first"')) {
        res.first = link.split("; ")[0].slice(1, -1);
      } else if (link.includes('rel="last"')) {
        res.last = link.split("; ")[0].slice(1, -1);
      }
    });

    return res;
  }

  return (
    <div className="pl-12 pr-12 pt-6">
      <h1 className="text-2xl font-bold">Team</h1>
      <span className="text-sm">gestion des membres de l'équipe</span>
      
      <div className=" flex flex-col mt-6 rounded border-solid border-gray-500 border-2 bg-navbar dark:bg-dark-navbar ease-in-out duration-500">
        
        <div className="flex flex-row font-bold py-3 px-3">
          <div className="flex flex-1">Nom</div>
          <div className="flex flex-1">Email</div>
          <div className="flex flex-1 justify-center">Age</div>
          <div className="flex flex-1">Tél</div>
          <div className="flex flex-1">Role</div>
        </div>

        {loading && <h1>Loading...</h1>}

        {!loading &&
          team.map((member) => (
            <div className="flex flex-row border-t-2 py-1 px-3 border-solid border-gray-500 hover:bg-firefox dark:hover:bg-dark-firefox cursor-pointer" key={member.id}>
              <div className="flex flex-1">{member.name}</div>
              <div className="flex flex-1">{member.email}</div>
              <div className="flex flex-1 justify-center">{member.age}</div>
              <div className="flex flex-1">{member.phone}</div>
              <div className="flex flex-1">{member.access}</div>
            </div>
          ))}

      </div>

      <div className="absolute bottom-4 right-32 flex flex-row justify-center gap-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          onClick={() => fetchTeam(links.first)}
        >
          &lt;&lt;
        </button>
        <button
          className={`text-white py-2 px-4 rounded ${links.prev ? "bg-blue-500 hover:bg-blue-700" :" bg-gray-500 cursor-default"}`}
          onClick={() => fetchTeam(links.prev)}
        >
          précédent
        </button>
        <button
          className={`text-white py-2 px-4 rounded ${links.next ? "bg-blue-500 hover:bg-blue-700" :" bg-gray-500 cursor-default"}`}
          onClick={() => fetchTeam(links.next)}
        >
          suivant
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          onClick={() => fetchTeam(links.last)}
        >
          &gt;&gt;
        </button>
      </div>
    </div>
  );
}
