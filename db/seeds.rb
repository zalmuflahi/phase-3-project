human = User.create!(
    name: 'michael' ,
    species: 'human', 
    lvl: 999,
    atk: 99,
    def: 99,
    agi: 99,
    int: 99,
    hp: 99,
    mp: 99
    )

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

goblin = Mob.create!(
     species: 'goblin',
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
     species: 'goblin',
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
     species: 'goblin',
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
     species: 'goblin',
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
     species: 'goblin',
     name: 'Ravik The Goblin Chief',
      description: 'the goblin cheif',
      weapon_id: 1,
      lvl: 7,
      atk: 10,
      def: 7,
      agi: 5,
      int: 1,
      hp: 15,
      mp: 2 ,
      skill: 'Skull Bash'
)

sword1 = Weapon.create!(
   name: 'unamed',
   description: 'old dull blade',
   lvl_required: 1,
      atk: 3,
      def: 2,
      hp: 0,
      mp: 0,
     durability: 20,
     user_id: human.id,
)


sword2 = Weapon.create!(
   name: 'Shusui',
   description: 'blade of the undead',
   lvl_required: 3,
      atk: 5,
      def: 5,
      hp: 0,
      mp: 0,
     durability: 60
)

sword3 = Weapon.create!(
   name: 'Enma',
   description: 'blade of kozuki oden',
      atk: 9,
      def: 4,
      hp: 0,
      mp: 2,
     durability: 100
)

sword4 = Weapon.create!(
   name: 'Wado Ichimonji',
   description: 'sword from the 3 swords style collection',
      atk: 8,
      def: 5,
      hp: 0,
      mp: 2,
     durability: 100
)