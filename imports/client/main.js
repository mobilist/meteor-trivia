import './routes'

import './subscribeProcessedActions'
import '/imports/client/listeners/dispatchServerActions'

import Actions from '/imports/store/actions'

window.log = console.log.bind(console)
window.Actions = Actions
