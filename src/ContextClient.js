import React from 'react';
import { Consumer } from './Context';

const ContextClient = () => {

  return (
    <Consumer>
      {/* Notice how inside the <Consumer> component we put a render prop, which
      is basically a function that returns JSX and takes the context itself 
      as parameter: */}
      { context => {

        // manipulate context variables here
        const { credentials, name } = context.userData;
        const { actions } = context;

        // Warning: in the onClick event handling of the button object, 
        // you need to put a function that returns the call to 
        // actions.function() rather than calling actions.function() directly
        // or you'll create an infinite loop in React.

        return (
          <>
            <h3>Inside the consumer object:</h3>
            <p>{JSON.stringify(context)}</p>
            <h3>Destructured values:</h3>
            <h4>Credentials:</h4>
            <p>
              username: {credentials.username}<br />
              password: {credentials.password}<br />
            </p>
            <h4>Name:</h4>
            <p>
              first: {name.first}<br />
              last: {name.last}<br />
            </p>
            <button onClick={() => actions.setName('Maryna', 'Surkova')}>
              Update Name to Maryna Surkova!
            </button>
          </>
        );
      }}
    </Consumer>
  );
}

export default ContextClient;