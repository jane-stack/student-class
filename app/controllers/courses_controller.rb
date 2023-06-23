class CoursesController < ApplicationController
    before_action :find_course, only: [:show, :update, :destroy]
    before_action :unprocessable_entity_if_not_found, only: [:show, :update, :destroy]

    # rendering all available course
    def index
        render json: Course.all
    end

    def show
        render json: @course
    end

    def create
        course = Course.create(course_params)
        render json: course, status: 201 # created
    end

    def update
        @course.update(course_params)
        render json: @course
    end

    def destroy
        @course.destroy
        render json: { message: "course has been removed" }
    end

    private

    def course_params
        params.permit(:name, :teacher)
    end

    def find_course
        @course = Course.find_by_id(params[:id])
    end

    def unprocessable_entity_if_not_found
        render json: { message: "Course not found" }, status: :unprocessable_entity unless @course
    end
end
