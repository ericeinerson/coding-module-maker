class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
skip_before_action :authorized, only: :create

    def show
        user = User.find(session[:user_id])
        render json: user
    end

    def create 
        user = User.create!(user_params)
        render json: user
    end

    private

    def user_params
        params.permit(:username, :password)
    end

    def render_unprocessable_entity(invalid)
        render json: {error: {login: invalid.record.errors}}, status: :unprocessable_entity
    end
end
