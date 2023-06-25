class StudentsController < ApplicationController
    before_action :find_student, only: [:show, :update, :destroy]
    skip_before_action :authorize, only: [:create]

    def index
        render json: Student.all
    end

    # get /students/:id - show indivisual students
    def show
        render json: @student, serializer: StudentWithCoursesSerializer
    end

    # patch /students/:id
    def update
        @student.update(student_params)
        render json: @student
    end

    # POST /signup
    def create
        student = Student.new(student_params)
        if student.save
            session[:student_id] = student.id
            render json: student, status: 201
        else
            render json: { errors: student.errors.full_messages }, status: :unprocessable_entity
        end
    end

    # GET /user
    def user
        render json: current_user
    end

    def destroy
        @student.destroy
        render json: { message: "Student account deactivated" }
    end

    private

    def find_student
        @student = Student.find(params[:id])
    end

    def student_params
        params.permit(:first_name, :last_name, :email, :password)
    end
end
