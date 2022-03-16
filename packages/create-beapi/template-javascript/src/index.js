import { client, CommandTypes } from 'beapi-core'

client.commands.register(
  {
    name: 'Ping',
    usage: 'ping',
    description: 'Ping GameTest scripts.',
    aliases: ['p'],
  },
  (sender) => {
    sender.sendMessage('§ePong!')
  },
)

client.commands.register(
  {
    name: 'Arg Test',
    usage: 'argtest',
    description: 'Tests the args system',
    aliases: ['at'],
  },
  (sender, args) => {
    const string = args.get('stringtest')
    const number = args.get('numbertest')
    const bool = args.get('booltest')
    sender?.sendMessage(`${string} ${number} ${bool}`)
  },
  [
    {
      name: 'stringtest',
      required: true,
      type: CommandTypes.String,
    },
    {
      name: 'numbertest',
      required: true,
      type: CommandTypes.Number,
    },
    {
      name: 'booltest',
      required: true,
      type: CommandTypes.Boolean,
    },
  ],
)
