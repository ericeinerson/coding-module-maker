class Language < ApplicationRecord
    has_many :lessons
    has_many :users, through: :lessons 
end
