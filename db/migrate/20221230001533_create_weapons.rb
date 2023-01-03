class CreateWeapons < ActiveRecord::Migration[6.1]
  def change
    create_table :weapons do |t|
      t.string :type
      t.string :name
      t.string :description
      t.string :image_url
      t.integer :lvl_required, default: 5
      t.integer :atk, default: 5
      t.integer :def, default: 3
      t.integer :hp, default: 2
      t.integer :mp, default: 2
      t.integer :durability, default: 100
      t.integer :weapon_id
      t.timestamps
    end
  end
end
