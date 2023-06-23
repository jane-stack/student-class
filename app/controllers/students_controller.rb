class StudentsController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def index
        render json: Student.all
    end

    # POST /signup
    def create
        student = Student.new(user_params)
        if student.save
            session[:student_id] = student.id
            render json: student, status: 201
        else
            render json: { errors: student.errors.full_messages }, status: :unprocessable_entity
        end
    end

    # GET /me
    def show
        render json: current_user
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :email, :password)
    end
end
