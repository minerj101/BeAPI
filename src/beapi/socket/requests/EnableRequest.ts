import { SocketManager } from '../SocketManager.js'
import { events } from '../../events/EventManager.js'
import { newRequestId } from '../requestId.js'
import {
  build,
  mcbe,
  protocol,
  version,
} from '../../version.js'

export class EnableRequest {
  private _socket: SocketManager
  public requestName = 'EnableRequest'
  public parameters = "returns data: {api: String, version: String, mcbe: String, protcol: Number, build: String}"

  constructor(socket: SocketManager) {
    this._socket = socket
    events.on("tick", (tick) => {
      if (tick % 25 != 0) return
      if (this._socket.enabled == true) return
      this._socket.sendMessage({
        berp: {
          event: "EnableSocket",
          data: {
            api: "BeAPI",
            version: version,
            mcbe: mcbe,
            protocol: protocol,
            build: build,
          },
          requestId: `${newRequestId()}`,
        },
      })
    })
    this._socket.on("Message", (packet) => {
      if (packet.event != "EnableRequest" || this._socket.enabled == true) return
      this._socket.enabled = true
      this._socket.sendMessage({
        berp: {
          event: "SocketEnabled",
          requestId: packet.requestId,
        },
      })
    })
  }
}
