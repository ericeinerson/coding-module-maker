class User < ApplicationRecord
    has_many :lessons
    has_many :languages, through: :lessons 

    validates :username, uniqueness: true, length: {minimum: 5}

    has_secure_password

end
