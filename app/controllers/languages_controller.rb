class LanguagesController < ApplicationController
    
    def index 
        languages = Language.all
        render json: languages
    end

    def create 
        language = Language.create!(name: params[:language])
        render json: language, status: :created
    end

end
