class Roman
  @@ROMAN = {'I' => 1, 'V' => 5, 'X' => 10, 'L' => 50, 'C' => 100, 'D' => 500, 'M' => 1000}   
  def convert(roman)
    @@ROMAN[roman]  
  end
end