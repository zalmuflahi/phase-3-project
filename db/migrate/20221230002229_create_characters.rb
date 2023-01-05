class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :gender, default: 'Male'
      t.string :species
      t.text :content

      t.timestamps
    end
  end
end
