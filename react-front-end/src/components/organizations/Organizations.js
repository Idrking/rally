import Axios from "axios";
import React, { useState, useEffect } from "react";
import OrganizationsCards from "./OrganizationsCards"

export default function Organizations() {
  const [organizations, setOrganizations] = useState([])
  useEffect(() => {
    Axios.get('/api/organizations')
    .then(res => {
      setOrganizations(res.data)
    })
  }, [])
  return (
    <div>
      {organizations.map(org =>  <OrganizationsCards key={org.id} details={org} /> )}
    </div>
  );
}
