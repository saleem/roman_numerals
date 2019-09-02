package roman_numerals

class Convert {
    val ROMAN: HashMap<Char, Int> = hashMapOf('I' to 1, 'V' to 5, 'X' to 10, 'L' to 50, 'C' to 100, 'D' to 500, 'M' to 1000)
    fun convert(roman: String): Int? {
        var result: Int = 0

        loop@ for (i in roman.indices) {
            if ((i < roman.length-1) && (toHA(roman[i]) < toHA(roman[i+1]))) continue@loop
            else if (i > 0 && toHA(roman[i]) > toHA(roman[i-1])) { result += toHA(roman[i]) - toHA(roman[i-1])}
            else { result += toHA(roman[i])}
        }
        return result
    }
    fun toHA(c: Char): Int {
        return ROMAN.getOrElse(c) { 0 }
    }
}
