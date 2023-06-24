class RegistersController < ApplicationController
    before_action :find_student
    before_action :find_course
    before_action :find_registration, only: [:destroy]

    def create
        @register = @student.courses << @course
        render json: @register, status: 201
    end

    def destroy
        @register.destroy
        render json: { message: "Course destroyed" }
    end

    private

    def find_registration
        @register = Register.find(params[:id])
    end

    def find_course
        @course = Course.find(params[:course_id])
    end

    def find_student
        @student = Student.find(params[:student_id])
    end
end
