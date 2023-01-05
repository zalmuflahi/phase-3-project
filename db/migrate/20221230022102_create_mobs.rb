class CreateMobs < ActiveRecord::Migration[6.1]
  def change
    create_table :mobs do |t|
      t.string :species
      t.string :name 
      t.string :description
      t.string :skill
      t.integer :lvl, default: 1
      t.integer :atk, default: 5
      t.integer :def, default: 3
      t.integer :agi, default: 1
      t.integer :int, default: 1
      t.integer :hp, default: 5
      t.integer :mp, default: 2
      t.integer :weapon_id

      t.timestamps
    end
  end
end
