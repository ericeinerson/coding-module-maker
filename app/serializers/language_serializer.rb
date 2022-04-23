class LanguageSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :terms
  has_many :lessons
end
