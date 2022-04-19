class LessonSerializer < ActiveModel::Serializer
  attributes :id, :level, :description

  belongs_to :language
  belongs_to :user

end
