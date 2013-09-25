require 'test_helper'

class DogsControllerTest < ActionController::TestCase

  test "should create a dog with a name and a birthday" do
    assert_difference('Dog.count') do
      post :create, dog: { :name => 'Blake', :birthday => Date.today - 30 }
    end
  end

end