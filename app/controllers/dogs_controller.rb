class DogsController < ActionController::Base

  def create
    dog = Dog.new(dog_params)
    dog.save
    redirect_to dog
  end

  def show
  end

  private

  # Never trust parameters from the scary internet, only allow the white list through.
  def dog_params
    params.require(:dog).permit(:name, :birthday)
  end
end