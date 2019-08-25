require "minitest/autorun"
require_relative "roman"

describe Roman do
  before do
    @roman = Roman.new
  end
  
  describe "Single Roman letters" do
    it "should convert to Hindu-Arabic numbers" do
      @roman.convert('I').must_equal 1
      @roman.convert('V').must_equal 5
      @roman.convert('X').must_equal 10
      @roman.convert('L').must_equal 50
      @roman.convert('C').must_equal 100
      @roman.convert('D').must_equal 500
      @roman.convert('M').must_equal 1000
    end
  end
end