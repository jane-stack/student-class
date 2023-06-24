class RegistersController < ApplicationController
    before_action :find_student
    before_action :find_course

    def create
        @register = @student.courses << @course
        render json: @register, status: 201
    end

    private

    def find_course
        @course = Course.find(params[:course_id])
    end

    def find_student
        @student = Student.find(params[:student_id])
    end
end
