import './contributors.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Contributors = () => {
  const [contrib, setContributors] = useState([]);

  useEffect(() => {
    async function getContributors() {
      getContributorsJson()
    }
    getContributors()
  }, [])

  const getContributorsJson = () => {
    axios.get(
      'https://api.github.com/repos/sporeproject/Spore-frontend/contributors'
    ).then(res => {
      setContributors(res.data);
    });
  }

  return (
    <>

      {
        contrib.map((data: any) => {
          return <div className="col-sm-12 col-md-4 col-lg-3 mb-4" key={data.html_url}>
            <div className="card">
              <img src={data.avatar_url} loading="lazy" className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">{data.login}</h5>
                <p className="card-text">Our Team Member</p>
                <div className="text-center">
                  <a href={data.html_url} className="btn btn-secondary githubbutton"><img src="git.png" height="30" alt=""></img></a>
                </div>
              </div>
            </div>
          </div>

        })
      }
      <div className="col-sm-12 col-md-4 col-lg-3 mb-4">
        <div className="card">
          <img src="cahyohayo.jpg" className="card-img-top" alt="cahyohayo"></img>
          <div className="card-body">
            <h5 className="card-title">C-Ohayo</h5>
            <p className="card-text">Our Team Member</p>
            <div className="text-center">
              <a href="https://github.com/cahyohayo" className="btn btn-secondary githubbutton"><img src="git.png" height="30" alt=""></img></a>
            </div>
          </div>
        </div>
      </div>

    </>
  );

};
export default Contributors;
