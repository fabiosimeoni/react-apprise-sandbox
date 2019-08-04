
import { ScaffoldModel } from "../lib"
import { Things } from "./Things";
import { Home } from "./Home";

export const scaffold : ScaffoldModel = {
  title:"Hello, Apprise.",
  sections: [
    { name:"Home",
      icon:"home", 
      title: "Home",
      route:{path:"/", exact:true},
      content: Home
    },
    { name:"Things",
      icon:"pie-chart", 
      title: "Many Things",
      route:{path:"/things/",exact:false},
      content: Things
    }
  
  ]
}

