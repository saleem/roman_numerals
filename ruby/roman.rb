class Roman
  @@ROMAN = {'I' => 1, 'V' => 5, 'X' => 10, 'L' => 50, 'C' => 100, 'D' => 500, 'M' => 1000}   
  def convert(roman)
    result = 0
    roman.split('').each_with_index do |c, i|
      next if i < roman.length-1 && @@ROMAN[c] < @@ROMAN[roman[i+1]]
      if i > 0 && @@ROMAN[c] > @@ROMAN[roman[i-1]]
        result += @@ROMAN[c] - @@ROMAN[roman[i-1]]
      else
        result += @@ROMAN[c]
      end
    end
    result
  end
end