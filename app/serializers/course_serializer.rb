class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :teacher

  has_many :students
end
