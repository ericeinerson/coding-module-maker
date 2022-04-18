class LessonsController < ApplicationController

    def index 
        lessons = Lesson.all
        render json: lessons, include: :language
    end
    
end
