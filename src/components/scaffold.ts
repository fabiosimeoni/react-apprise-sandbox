
import { ScaffoldModel } from "../lib"
import { Things } from "./Things";
import { Home } from "./Home";

export const scaffold : ScaffoldModel = {
  title:"Hello, Apprise.",
  sections: [
    { name:"Home",
      icon:"home", 
      title: "Home",
      route:"/",
      content: Home
    },
    { name:"Things",
      icon:"pie-chart", 
      title: "Many Things",
      route:"/things/",
      content: Things
    }
  
  ]
}

