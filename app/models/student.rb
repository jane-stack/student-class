class Student < ApplicationRecord
    has_secure_password

    has_many :courses, dependent: :destroy
    has_many :registers, through: :courses
end
