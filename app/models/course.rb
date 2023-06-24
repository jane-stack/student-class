class Course < ApplicationRecord
    has_many :registers
    has_many :students, through: :registers

    validates :name, :teacher, presense: true
end
