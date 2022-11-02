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
        }, (Math.random() * 500) + 500);
      });
  };

  const toggleAll = () => {
    const checkboxes = document.querySelectorAll('.userbox');
    const adminbox = document.querySelector('.adminbox');
    checkboxes.forEach((checkbox) => {
      if(adminbox.checked) {
        checkbox.checked = true;
      } else {
        checkbox.checked = false;
      }
    });
  }

  const toggle = (e) => {
    const checkbox = e.currentTarget.querySelector('.userbox');
    checkbox.checked = !checkbox.checked;
  }



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
        
        <div className="flex flex-row font-bold py-3 px-3 items-center">
          <input 
            type="checkbox" 
            className="adminbox accent-dark-firefox w-4 h-4 cursor-pointer"
            onChange={toggleAll}
          />
          <div className="flex flex-1 ml-3">Nom</div>
          <div className="flex flex-1">Email</div>
          <div className="flex flex-1 justify-center">Age</div>
          <div className="flex flex-1">Tél</div>
          <div className="flex flex-1">Role</div>
        </div>

        {loading && 
          <div className="h-[440px] w-full flex justify-center items-center">
            <svg class="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          </div>  
        }

        {!loading &&
          team.map((member) => (
            <div 
              className="flex flex-row items-center border-t-2 py-1 px-3 border-solid border-gray-500 hover:bg-firefox dark:hover:bg-dark-firefox cursor-pointer" 
              key={member.id}
              onClick={toggle}
            >
              <input 
                type="checkbox"
                className="userbox accent-dark-firefox w-4 h-4 cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="flex flex-1 ml-3">{member.name}</div>
              <div className="flex flex-1">{member.email}</div>
              <div className="flex flex-1 justify-center">{member.age}</div>
              <div className="flex flex-1">{member.phone}</div>
              <div className="flex flex-1">{member.access}</div>
            </div>
          ))}

      </div>

      <div className="absolute bottom-4 right-32 flex flex-row justify-center gap-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-[20px_0.25rem_0.25rem_20px]"
          onClick={() => fetchTeam(links.first)}
        >
          &lt;&lt;
        </button>
        <button
          className={`text-white py-2 px-4 rounded ${links.prev && !loading ? "bg-blue-500 hover:bg-blue-700" :" bg-gray-500 cursor-default"}`}
          onClick={() => fetchTeam(links.prev)}
        >
          précédent
        </button>
        <button
          className={`text-white py-2 px-4 rounded ${links.next && !loading ? "bg-blue-500 hover:bg-blue-700" :" bg-gray-500 cursor-default"}`}
          onClick={() => fetchTeam(links.next)}
        >
          suivant
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-[0.25rem_20px_20px_0.25rem]"
          onClick={() => fetchTeam(links.last)}
        >
          &gt;&gt;
        </button>
      </div>
    </div>
  );
}
