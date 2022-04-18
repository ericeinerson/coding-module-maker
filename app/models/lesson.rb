class Lesson < ApplicationRecord
  belongs_to :user
  belongs_to :language

  def languages
    language
  end
end
