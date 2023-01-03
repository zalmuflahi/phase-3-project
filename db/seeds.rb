demon1 = User.create!(
    name: 'michael' ,
    race: 'Half Demon', 
    atk: 7,
    def: 4,
    agi: 3,
    int: 1,
    hp: 3,
    mp: 2
    )

# demon2 = User.create!(
#     name: nil, 
#     race: 'Half Demon', 
#     gender: 'Female',
#     atk: 7,
#     def: 4,
#     agi: 3,
#     int: 1,
#     hp: 3,
#     mp: 2
#     )

# human1 = User.create!(
#     name: nil, 
#     race: 'Human',
#       atk: 5,
#       def: 3,
#       agi: 3,
#       int: 2,
#       hp: 5,
#       mp: 2
# )

# human2 = User.create!(
#     name: nil,
#     race: 'Human',
#     gender: 'Female',
#       atk: 5,
#       def: 3,
#       agi: 3,
#       int: 2,
#       hp: 5,
#       mp: 2
# )

# elf1 = User.create!(
#     name: nil,
#     race: 'Elf',
#       atk: 4,
#       def: 2,
#       agi: 2,
#       int: 4,
#       hp: 3,
#       mp: 5
# )

# elf2 = User.create!(
#     name: nil,
#     race: 'Elf',
#       gender: 'Female',
#        atk: 4,
#       def: 2,
#       agi: 2,
#       int: 4,
#       hp: 3,
#       mp: 5
# )

npc1 = Character.create!(
      name: 'alza',
      race: 'Human',
      content: 'please help in defeating the Demon Lord ' 
)

npc2 = Character.create!(
      name: 'alpha',
      race: 'Human',
      gender: 'Female',
      content: 'to jump click the SpaceBar' 
)

npc3 = Character.create!(
      name: 'bravo',
      race: 'Elf',
      content: 'before engaging in combat hover over the mob to see its stats'
)

npc4 = Character.create!(
      name: 'charlie',
      race: 'Elf',
      gender: 'Female',
      content: 'after lvling up dont forget to distribute your extra status points'
)

npc5 = Character.create!(
      name: 'delta',
      race: 'Demi Demon',
      content: 'the demon lord wants the world to burn to ashes'
)

npc6 = Character.create!(
      name: 'echo',
      race: 'Demi Demon',
      gender: 'Female',
      content: 'to buy weapons click on the B button'
)

npc7 = Character.create!(
      name: 'foxtrot',
      race: 'Elf',
      gender: 'Female',
      content: 'to buy items click on the I button'
)

goblin = Mob.create!(
     speices: 'goblin',
     name: nil,
      description: 'as strong as a child',
      lvl: 1,
      atk: 5,
      def: 3,
      agi: 1,
      int: 1,
      hp: 5,
      mp: 2 
)

goblin2 = Mob.create!(
     speices: 'goblin',
     name: 'goblin knight',
      description: 'goblin that uses a shield to protect itself',
      lvl: 3,
      atk: 3,
      def: 6,
      agi: 3,
      int: 2,
      hp: 5,
      mp: 1 
)

goblin3 = Mob.create!(
     speices: 'goblin',
     name: 'goblin noble',
      description: 'swings its sword like a child',
      lvl: 5,
      atk: 7,
      def: 6,
      agi: 5,
      int: 1,
      hp: 5,
      mp: 1 ,
      skill: 'bleed'
)

goblin4 = Mob.create!(
     speices: 'goblin',
     name: 'goblin hunter',
      description: 'uses long range attacks to kill its target',
      lvl: 5,
      atk: 2,
      def: 2,
      agi: 1,
      int: 6,
      hp: 3,
      mp: 6 ,
      skill: 'burn'
)

goblin5 = Mob.create!(
     speices: 'goblin',
     name: 'Ravik The Goblin Chief',
      description: 'the goblin cheif',
      lvl: 7,
      atk: 10,
      def: 7,
      agi: 5,
      int: 1,
      hp: 15,
      mp: 2 ,
      skill: 'Skull Bash'
)