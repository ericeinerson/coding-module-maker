class TermSerializer < ActiveModel::Serializer
  attributes :id, :name, :definition
  belongs_to :language
end
