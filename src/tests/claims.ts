import {
  commands,
  events,
  players,
  db,
  Database,
  Player,
  executeCommand,
  setTimeout,
} from '../beapi/BeAPI.js'
import {
  Location,
  Dimensions,
  entry,
} from '../types/BeAPI.i.js'

// CONFIG
const claimRadius = 25
const staffTag = "admin"
const borderParticle = "minecraft:heart_particle"
//

// Mounts to the Database
let claims: Database
if (db.getAllDatabases().has("claims")) {
  claims = db.mountByName("claims")
} else {
  claims = new Database({
    name: "claims",
  })
}

// Registers the claims commands
commands.registerCommand({
  command: "claims",
  description: "Main command to interact with the claims plugin.",
  aliases: [
    "c",
    "cm",
  ],
}, (data) => {
  if (!data.args[0]) return data.sender.sendMessage("§cInvalid parameter! Expected <set|delete|add-member|remove-member>")
  switch (data.args[0]) {
  default:
    data.sender.sendMessage("§cInvalid parameter! Expected <set|delete|add-member|remove-member>")
    break
  case "set":
    if (claims.getEntries().has(data.sender.getName())) {
      data.sender.sendMessage("You already have a claim!")
    } else {
      if (isCordInClaim({
        x: data.sender.getLocation().x,
        z: data.sender.getLocation().z,
      }, data.sender.getName()).is || isCordInClaim({
        x: data.sender.getLocation().x + claimRadius,
        z: data.sender.getLocation().z + claimRadius,
      }, data.sender.getName()).is || isCordInClaim({
        x: data.sender.getLocation().x - claimRadius,
        z: data.sender.getLocation().z - claimRadius,
      }, data.sender.getName()).is || isCordInClaim({
        x: data.sender.getLocation().x + claimRadius,
        z: data.sender.getLocation().z - claimRadius,
      }, data.sender.getName()).is || isCordInClaim({
        x: data.sender.getLocation().x - claimRadius,
        z: data.sender.getLocation().z + claimRadius,
      }, data.sender.getName()).is) {
        return data.sender.sendMessage("§cYou are too close to another claim!")
      }
      data.sender.sendMessage(`§aSuccessfully made your claim! The center of your claim is at §7${data.sender.getLocation().x} ${data.sender.getLocation().y} ${data.sender.getLocation().z}§a.`)
      new Claim({
        owner: data.sender.getName(),
        dimension: data.sender.getDimensionName(),
        pos: data.sender.getLocation(),
      })
    }
    break
  case "delete":
    const claimPos = []
    for (const [owner, claim] of getAllClaims()) {
      if (owner !== "NotPMK") continue
      claimPos.push({
        x: claim.pos.x,
        z: claim.pos.z,
        owner,
      })
    }
    for (const pos of claimPos) {
      if (checkArea([pos.x - claimRadius, pos.z - claimRadius], [pos.x + claimRadius, pos.z + claimRadius], [data.sender.getLocation().x, data.sender.getLocation().z])) {
        const claim = getAllClaims().get("NotPMK") //data.sender.getName()
        claim.destroy()
        data.sender.sendMessage("§aYour claim has be removed.")
      } else {
        if (data.sender.hasTag("inClaim")) return data.sender.sendMessage("§cYou don't own this claim!")

        return data.sender.sendMessage("§cYou aren't in a claim! You must be inside of the claim you want to remove.")
      }
    }
    break
  case "add-member":
    break
  }
})

// Gets all the claim entries from the Database, and creates a Claim class for each.
function getAllClaims(): Map<string, Claim> {
  const knownclaims = new Map<string, Claim>()
  for (const [owner, entry] of claims.getEntries()) {
    knownclaims.set(owner, new Claim({
      owner: owner,
      pos: entry.value.pos,
      dimension: entry.value.dimension,
    }, true))
  }

  return knownclaims
}

interface ClaimOptions {
  pos: Location
  dimension: Dimensions
  owner: string
}

// The main claim class
class Claim {
  public readonly pos: Location
  public readonly dimension: Dimensions
  public readonly owner: string
  private dbEntry: entry

  constructor(options: ClaimOptions, mount = false) {
    this.pos = options.pos
    this.dimension = options.dimension
    this.owner = "NotPMK" // this.owner
    if (mount) {
      this.dbEntry = claims.getEntries().get(this.owner)
    } else {
      claims.addEntry({
        name: this.owner,
        value: {
          owner: this.owner,
          dimension: this.dimension,
          pos: this.pos,
          members: [],
        },
      })
      this.dbEntry = claims.getEntries().get(this.owner)
    }
  }
  public addMemeber(player: string): void {
    const members = this.dbEntry.value.members.push(player)
    claims.removeEntry(this.owner)
    claims.addEntry({
      name: this.owner,
      value: {
        owner: this.owner,
        dimension: this.dimension,
        pos: this.pos,
        members: members,
      },
    })
  }
  public removeMember(player: string): void {
    const members = this.dbEntry.value.members.filter((x: any) => x !== player)
    claims.removeEntry(this.owner)
    claims.addEntry({
      name: this.owner,
      value: {
        owner: this.owner,
        dimension: this.dimension,
        pos: this.pos,
        members: members,
      },
    })
  }
  public destroy(): void {
    claims.removeEntry(this.owner)
  }
  public getMemebers(): string[] {
    return this.dbEntry.value.members
  }
}

// Events listener for when a player tries to place or use an item.
events.on("ItemUseOn", (data) => {
  const player = data.source as Player
  if (player.hasTag(staffTag)) return
  const check = isCordInClaim({
    x: data.block.location.x,
    z: data.block.location.z,
  }, player.getName())
  if (!check.is) return
  player.executeCommand(`titleraw @s actionbar {"rawtext":[{"text":"§c§lYou don't have permission to do that action in ${check.owner}'s claim!§r"}]}`)
  showBorder(player, {
    owner: check.owner,
    x: check.pos.x,
    z: check.pos.z,
  })
  data.cancelEvent()
})

// Event listener track players cords to check if they are in a claim.
events.on("tick", (tick) => {
  if (tick % 5 != 0) return
  for (const [, player] of players.getPlayerList()) {
    if (player.hasTag(staffTag)) continue
    const check = isCordInClaim({
      x: player.getLocation().x,
      z: player.getLocation().z,
    }, player.getName())
    if (!check.is) {
      if (player.getGamemode() === "survival") return
      player.sendMessage("§7You have just entered the §cWild§7.")
      player.removeTag("inClaim")
      player.executeCommand("gamemode s")
      showBorder(player, {
        owner: check.owner,
        x: check.pos.x,
        z: check.pos.z,
      })
    } else {
      if (player.getGamemode() === "adventure") return
      player.sendMessage(`§7You have just entered §a${check.owner}'s§7 claim.`)
      player.addTag("inClaim")
      player.executeCommand("gamemode a")
      showBorder(player, {
        owner: check.owner,
        x: check.pos.x,
        z: check.pos.z,
      })
    }
  }
})

// Event listener for when a player breaks a block.
events.on("BlockDestroyed", (data) => {
  // TODO: Cancel event once we are able to. Big brain mojang is returning the block as air :)
  const check = isCordInClaim({
    x: data.block.location.x,
    z: data.block.location.z,
  }, data.player.getName())
  if (!check.is) return
  data.player.executeCommand(`titleraw @s actionbar {"rawtext":[{"text":"§c§lYou don't have permission to do that action in ${check.owner}'s claim!§r"}]}`)
  showBorder(data.player, {
    owner: check.owner,
    x: check.pos.x,
    z: check.pos.z,
  })
})

// Checks if a set of cords are in a claim. if so, it will return the claim info.
function isCordInClaim(loc: {x: number, z: number}, player: string): {is: boolean, owner?: string, pos?: {x: number, z: number}} {
  const enemyClaimPos = []
  for (const [owner, claim] of getAllClaims()) {
    if (owner === player || claim.getMemebers().includes(player)) return {
      is: false,
    }
    enemyClaimPos.push({
      x: claim.pos.x,
      z: claim.pos.z,
      owner,
    })
  }
  for (const pos of enemyClaimPos) {
    if (checkArea([pos.x - claimRadius, pos.z - claimRadius], [pos.x + claimRadius, pos.z + claimRadius], [loc.x, loc.z])) {
      return {
        is: true,
        owner: pos.owner,
        pos: {
          x: pos.x,
          z: pos.z,
        },
      }
    } else {
      return {
        is: false,
        owner: pos.owner,
        pos: {
          x: pos.x,
          z: pos.z,
        },
      }
    }
  }

  return {
    is: false,
    owner: "unknown",
    pos: {
      x: 0,
      z: 0,
    },
  }
}

// Shows the claim border
let cooldown = false
function showBorder(player: Player, pos: {x: number, z: number, owner: string}): void {
  if (cooldown) return
  cooldown = true
  const cords1 = range(pos.x - claimRadius, pos.x + claimRadius)
  const cords2 = range(pos.z - claimRadius, pos.z + claimRadius)
  for (const cord of cords1) {
    executeCommand(`particle ${borderParticle} ${cord} ${player.getLocation().y + 2} ${pos.z - claimRadius}`, player.getDimensionName())
    executeCommand(`particle ${borderParticle} ${cord} ${player.getLocation().y + 2} ${pos.z + claimRadius}`, player.getDimensionName())
  }
  for (const cord of cords2) {
    executeCommand(`particle ${borderParticle} ${pos.x - claimRadius} ${player.getLocation().y + 2} ${cord}`, player.getDimensionName())
    executeCommand(`particle ${borderParticle} ${pos.x + claimRadius} ${player.getLocation().y + 2} ${cord}`, player.getDimensionName())
  }
  startCooldown()
}

// Cooldown for the claim border
function startCooldown(): void {
  setTimeout(() => {
    cooldown = false
  }, 10)
}


// Stuff
const range = (min: number, max: number) => [...Array(max - min + 1).keys()].map(i => i + min)

function between(a: number, b: number, num: number): boolean {
  const max = Math.max(a, b)
  const min = Math.min(a, b)

  return num >= min && num <= max
}

function checkArea(a: [number, number], b: [number, number], event: [number, number]): boolean {
  const [ax, az] = a
  const [bx, bz] = b
  const [ex, ez] = event

  return between(ax, bx, ex) && between(az, bz, ez)
}
