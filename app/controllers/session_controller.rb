class SessionController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found
skip_before_action :authorized, only: :create
    def create
        user = User.find_by!(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id 
            render json: user, status: :created
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

    private

    def render_record_not_found
        render json: {error: {login: "Invalid username or password"}}, status: :unauthorized
    end
end
