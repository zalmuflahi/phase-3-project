# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_12_30_022102) do

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.string "gender", default: "Male"
    t.string "species"
    t.text "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "locations", force: :cascade do |t|
    t.string "type"
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "mobs", force: :cascade do |t|
    t.string "species"
    t.string "name"
    t.string "description"
    t.string "skill"
    t.integer "lvl", default: 1
    t.integer "atk", default: 5
    t.integer "def", default: 3
    t.integer "agi", default: 1
    t.integer "int", default: 1
    t.integer "hp", default: 5
    t.integer "mp", default: 2
    t.integer "weapon_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "species"
    t.string "profession", default: "swordsman"
    t.string "gender", default: "Male"
    t.integer "lvl", default: 1
    t.integer "exp"
    t.integer "atk", default: 5
    t.integer "def", default: 3
    t.integer "agi", default: 3
    t.integer "int", default: 2
    t.integer "hp", default: 5
    t.integer "mp", default: 2
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "weapons", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.integer "lvl_required", default: 5
    t.integer "atk", default: 5
    t.integer "def", default: 3
    t.integer "hp", default: 2
    t.integer "mp", default: 2
    t.integer "durability", default: 100
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
