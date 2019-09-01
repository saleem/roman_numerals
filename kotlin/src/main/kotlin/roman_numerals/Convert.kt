package roman_numerals

class Convert {
    val ROMAN: HashMap<String, Int> = hashMapOf("I" to 1, "V" to 5, "X" to 10, "L" to 50, "C" to 100, "D" to 500, "M" to 1000)
    fun convert(roman: String): Int? {
        var value: Int = 0
        roman.forEach {
            value += ROMAN.getOrElse(Character.toString(it)) { 0 }
         }
         return value
    }
}
