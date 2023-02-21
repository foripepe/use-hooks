import './App.css';
import { StrictMode } from 'react';

import StateTutorial from "./UseState/StateTutorial";
import StateClassExample from "./UseState/StateClassExample";

import ReducerTutorial from "./UseReducer/ReducerTutorial";
import ReducerTutorialwState from "./UseReducer/ReducerTutorialwState";

import EffectClassExample from './UseEffect/EffectClassExample';
import EffectTutorial from "./UseEffect/EffectTutorial";
import EffectTutorialFull from './UseEffect/EffectTutorialFull';

import CallBackTutorial from "./UseCallback/CallbackTutorial";
import ContextTutorial from "./UseContext/ContextTutorial";
import ImperativeHandle from "./UseImperativeHandle/ImperativeHandle";
import LayoutEffectTutorial from "./UseLayoutEffect/LayoutEffectTutorial";
import MemoTutorial from "./UseMemo/MemoTutorial";
import RefTutorial from "./UseRef/RefTutorial";

import UseDebugValue from './UseDebugValue/UseDebugValue';

import UseId from './UseId/UseId';

import UseDeferredValueExampleNotOptimized from './UseDeferredValue/UseDeferredValueNotOptimized';
import UseDeferredValue from './UseDeferredValue/UseDeferredValue';

import UseTransition from './UseTransition/UseTransition';

import Documentation from './Documentation/Documentation';

/**
 * Rules
 * Always call hooks at the top level
 * Only call hooks from React functions
 * Don't call hooks from regular JS functions
 * Don't call hooks from inside loops, conditions, or nested functions
 * Don't call hooks from class components
 * Don't call hooks from event handlers
 * Don't call hooks from render methods
 * Don't call hooks from server side rendering
 * Don't call hooks from tests
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          React Hooks
        </p>

        { false && <StateClassExample /> }
        { false && <StateTutorial /> }

        { false && <ReducerTutorialwState /> }
        { false && <ReducerTutorial /> }

        { false && <EffectClassExample /> }
        { false && <EffectTutorial /> }
        { false && <EffectTutorialFull /> }

        { false && <RefTutorial /> }

        { false && <LayoutEffectTutorial /> }

        { false && <ImperativeHandle /> }

        { false && <ContextTutorial /> }

        { false && <MemoTutorial /> }

        { false && <CallBackTutorial /> }

        { false && <UseDebugValue /> }

        { false && <UseId /> }

        { false && <UseDeferredValueExampleNotOptimized /> }
        { false && <UseDeferredValue /> }

        { false && <UseTransition /> }

        { /* useSyncExternalStore */ }
        { /* useInsertionEffect */ }

        {false && <Documentation /> }
      </header>
    </div>
  );
}

export default App;
