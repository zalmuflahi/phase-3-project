class Weapon < ApplicationRecord
    belongs_to :user, optional: true
    belongs_to :mob, optional: true
end
