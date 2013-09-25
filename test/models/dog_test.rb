require "test_helper"

describe Dog do
  before do
    @dog = Dog.new
  end

  it "must be valid" do
    @dog.valid?.must_equal true
  end
end
