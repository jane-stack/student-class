class Register < ApplicationRecord
  belongs_to :student
  belongs_to :course

  # validates :student_id, :course_id, presense: true
end
