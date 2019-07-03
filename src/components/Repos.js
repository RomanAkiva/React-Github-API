import React, {useEffect, useState} from 'react';

function getGithubRepos(){
    return fetch("https://api.github.com/search/repositories?q=stars:>25000+language:jacasvript&sort=stars&order=desc")
      .then(data => data.json());
  }

const Repos = () => {
    const [reposList, setReposList] = useState(null);

    useEffect(() => {
      getGithubRepos().then(results => results.items.map(({id,full_name,stargazers_count,html_url }) => {
          return {id,full_name,stargazers_count,html_url }
        })
      ).then(reposList => setReposList(reposList))
    },[]);

    return (
      <div className="App">
          {reposList === null ? <div>Loading...</div> : <table className="highlight">
          <thead>
            <tr>
                <th>Full Name</th>
                <th>Stars</th>
                <th>Repos Link</th>
            </tr>
          </thead>
  
          <tbody>
            {
              reposList.map(repo => {
                return (
                  <tr key={repo.id}>
                    <td>{repo.full_name}</td>
                    <td>{repo.stargazers_count}</td>
                    <td><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.html_url}</a></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>}
      </div>
    );
}

export default Repos
