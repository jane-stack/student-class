class StudentWithCoursesSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name

  has_many :courses
end
