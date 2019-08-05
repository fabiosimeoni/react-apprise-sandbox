import * as React from "react";
import { connect } from "../lib";
import { thingapi } from "../thing";
import { State } from "../state";
import { Button } from "antd";
import { Route, Link } from "react-router-dom"

type Props = State & {
  match: any
}

const $Things = (props:Props) => {

  return <> 
          <Route exact path={props.match.url} render={()=><AllThings {...props} />} />
          <Route exact path={props.match.url+"/:id"} render={ (props) => <span>Showing {props.match.params.id}</span> } />
        </>;
};

export const Things = connect( $Things, state => state.things );

const AllThings = (props:Props) => {

  const things = thingapi(props);

      return <div>
      <br/>
      <Button onClick={ thingapi(props).addRandom }>Add a thing</Button>
      <br/><br/>
      {things.all().length === 0 ? "No-thing." : things.all().map( (t,i) => 
        
            <Link key={i} to={props.match.url+"/"+t.name } >
                 <div >{t.name}</div>

            </Link>
            
        )}

    </div>;
}