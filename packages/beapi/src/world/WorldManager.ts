import type { Client } from '../client'
import type { Dimension, Location } from '../types'
import type { Entity } from '../entity'
import type { Player } from '../player'
import { Block, BlockLocation, world } from 'mojang-minecraft'
export class WorldManager {
  protected readonly _client: Client
  public constructor(client: Client) {
    this._client = client
  }

  public sendMessage(message: string): void {
    this.executeCommand(`tellraw @s {"rawtext":[{"text":"${message}"}]}`)
  }

  public sendRawMessage(message: Array<object>): void {
    this._client.executeCommand(`tellraw @s {"rawtext":[${JSON.stringify(message)}]}`)
  }

  public getEntitiesFromLocation(dimension: Dimension, location: Location): Entity[] {
    const entities = Array.from(this._client.entities.getAll().values()).filter(
      (x) => x.getLocation() === location && x.getDimensionName() === dimension,
    )

    return entities
  }

  public getPlayersFromLocation(dimension: Dimension, location: Location): Player[] {
    const players = Array.from(this._client.players.getAll().values()).filter(
      (x) => x.getLocation() === location && x.getDimensionName() === dimension,
    )

    return players
  }

  public spawnEntity(entity: string, pos: Location, name = ''): Entity | undefined {
    this._client.executeCommand(`summon ${entity} "${name}" ${pos.x} ${pos.y} ${pos.z}`)
    return this._client.entities.getLastest()
  }

  public getBlock(dimension: Dimension, location: Location): Block {
    return world.getDimension(dimension).getBlock(new BlockLocation(location.x, location.y, location.z))
  }
}
