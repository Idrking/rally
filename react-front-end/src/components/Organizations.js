import React from "react";
import OrganizationsCards from "./OrganizationsCards"
import { Divider, Gri } from "@material-ui/core";


export default function Organizations() {

  return (
   <div>
     <div><OrganizationsCards /></div>
     <div><OrganizationsCards /></div>
   </div>
  );
}
