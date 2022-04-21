class User < ApplicationRecord
    has_secure_password
    has_many :lessons
    has_many :languages, through: :lessons 

    validates :password, length: {minimum: 5}
end
