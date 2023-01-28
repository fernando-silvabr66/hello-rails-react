class Api::GreetingsController < ApplicationController
  def random
    message = Greeting.where(id: rand(1..5))
    render json: { greetings: message }
  end
end
