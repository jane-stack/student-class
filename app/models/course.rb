class Course < ApplicationRecord
    has_many :registers
    has_many :students, through: :registers
end
