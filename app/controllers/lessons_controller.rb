class LessonsController < ApplicationController

    def index 
        lessons = Lesson.all
        render json: lessons
    end
    
    def create 
        lesson = Lesson.create!(
            level: params[:level], 
            description: params[:description], 
            language: Language.find_by(name: params[:language]), 
            user_id: session[:user_id])
            
        render json: lesson
    end

    def destroy 
        lesson = Lesson.find_by!(id:params[:id])
        lesson.destroy
        head :no_content
    end

    private

    def lesson_params
        params.permit(:level, :description)
    end
end
