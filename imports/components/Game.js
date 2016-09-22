import React from 'react'
import { dispatchAction } from '../methods/client/dispatchAction'
import Actions from '../store/actions'

export const Game = ({ title, status }) => (
  <div>
    <h1>Game:{ title } ({ status })</h1>
    <button onClick={() => dispatchAction(Actions.Game.begin()) }>Begin Game</button>
    <button onClick={() => dispatchAction(Actions.Game.end()) }>End Game</button>
  </div>
)