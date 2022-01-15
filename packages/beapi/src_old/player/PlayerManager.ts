import type { Player as MCPlayer } from 'mojang-minecraft'
import type { Player } from './Player.js'
import type { NameTagChanged } from '../@types/BeAPI.i'

export class PlayerManager {
  private readonly _players = {
    name: new Map<string, Player>(),
    nameTag: new Map<string, Player>(),
    vanilla: new Map<MCPlayer, Player>(),
  }

  public addPlayer(player: Player): void {
    this._players.name.set(player.getName(), player)
    this._players.nameTag.set(player.getNameTag(), player)
    this._players.vanilla.set(player.getVanilla(), player)
  }

  public removePlayer(player: Player): void {
    this._players.name.delete(player.getName())
    this._players.nameTag.delete(player.getNameTag())
    this._players.vanilla.delete(player.getVanilla())
  }

  public getPlayerList(): Map<string, Player> {
    return this._players.name
  }

  public getPlayerByName(name: string): Player | undefined {
    return this._players.name.get(name)
  }

  public getPlayerByNameTag(nameTag: string): Player | undefined {
    return this._players.nameTag.get(nameTag)
  }

  public getPlayerByVanilla(vanilla: MCPlayer): Player | undefined {
    return this._players.vanilla.get(vanilla)
  }

  public updateNameTag(data: NameTagChanged): void {
    this._players.nameTag.delete(data.old)
    // Eslint Issue?
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    this._players.nameTag.set(data.new, data.player)
  }
}

const players = new PlayerManager()

export { players }
