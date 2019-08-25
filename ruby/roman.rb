class Roman
  @@ROMAN = {'I' => 1, 'V' => 5, 'X' => 10, 'L' => 50, 'C' => 100, 'D' => 500, 'M' => 1000}   
  def convert(roman)
    result = 0
    roman.split('').each_with_index {|c, i|  result += @@ROMAN[c]}
    result
  end
end