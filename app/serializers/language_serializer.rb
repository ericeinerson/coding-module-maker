class LanguageSerializer < ActiveModel::Serializer
  attributes :name

  has_many :lessons
end
