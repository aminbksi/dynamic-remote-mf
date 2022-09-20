import Widget from './Widget';
import React, { Suspense } from 'react';
import WidgetRemote from 'remote/Widget';

const App = () => (
  <div>
    <h1>Dynamic System Host</h1>
    <h2>Host</h2>
    <Widget />
    <Suspense fallback="Loading widget">
      <WidgetRemote />
    </Suspense>
  </div>
);

export default App;
