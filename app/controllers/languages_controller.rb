class LanguagesController < ApplicationController
    
    def index 
        languages = Lesson.all
        render json: languages
    end
end
