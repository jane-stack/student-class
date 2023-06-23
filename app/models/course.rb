class Course < ApplicationRecord
    has_many :registers, dependent: :destroy
    has_many :students, through: :registers
end
