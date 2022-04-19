class LessonSerializer < ActiveModel::Serializer
  attributes :level, :description

  belongs_to :language
  belongs_to :user

end
