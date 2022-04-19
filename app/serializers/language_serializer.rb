class LanguageSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :lessons
end
