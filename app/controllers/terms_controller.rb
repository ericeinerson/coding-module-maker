class TermsController < ApplicationController

    def index 
        terms = Terms.all
        render json: terms
    end
end
