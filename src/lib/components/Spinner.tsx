import * as React from "react";


export const Spinner = (props : {when:boolean,children:any}) => {


  return props.when ? <span>Loading...</span> : <div> {props.children} </div>;
};
