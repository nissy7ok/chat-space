class MessagesController < ApplicationController
  def index
    @group = Group.find(params[:id])
    @messages = @group.messages
  end

  def create

  end
end
