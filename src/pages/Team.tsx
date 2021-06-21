import React from 'react'
import Contributors from '../components/contributors';

const Team = () => (
  <div className="our-team" id="ourteam">
    <div className="container">
      <div className="judul-roadmap margin-r">
        <h1 className="text-roadmap"><b>Our Team Developers</b></h1>
        <h3 className="p-roadmap">Our Core Team Members</h3>
      </div>
      <div className="row">
        <Contributors />
      </div>
    </div>
  </div>
)

export default Team