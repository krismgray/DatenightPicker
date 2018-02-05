class Api::IdeasController < ApplicationController

def index
  render json: Idea.order(created_at: :desc)
end

def create
  idea = Idea.create(name: params[:name])
  render json: idea
end

def destroy
  Idea.find(params[:id]).destroy
end

end
