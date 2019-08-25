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

  describe "Descending Roman letters" do
    it "should convert VI to 6" do
      @roman.convert('VI').must_equal 6
    end
    it "should convert MDCLXVI to 1666" do
      @roman.convert('MDCLXVI').must_equal 1666
    end
    it "should convert MMXX to 2020" do
      @roman.convert('MMXX').must_equal 2020
    end
  end

  describe "Ascending Roman letters" do
    it "should convert IV to 4" do
      @roman.convert('IV').must_equal 4
    end
    it "should convert MCMLXIV to 1964" do
      @roman.convert('MCMLXIV').must_equal 1964
    end
    it "should convert MMXIX to 2019" do
      @roman.convert('MMXIX').must_equal 2019
    end
  end
end