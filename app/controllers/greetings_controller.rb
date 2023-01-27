class GreetingsController < ApplicationController
  def random
    @message = Greeting.find(rand(1..5))
    render json: @message
  end
end
