class RegisterSerializer < ActiveModel::Serializer
  attributes :id
  has_one :student
  has_one :course
end
