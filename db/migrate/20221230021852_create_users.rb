class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :race
      t.string :profession, default: 'Battle slave'
      t.string :gender, default: 'Male'
      t.integer :lvl, default: 1
      t.integer :exp
      t.integer :atk, default: 5
      t.integer :def, default: 3
      t.integer :agi, default: 3
      t.integer :int, default: 2
      t.integer :hp, default: 5
      t.integer :mp, default: 2
    
       
      t.timestamps
    end
  end
end
