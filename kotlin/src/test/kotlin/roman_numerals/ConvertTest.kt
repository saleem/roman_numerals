package roman_numerals

import kotlin.test.Test
import kotlin.test.assertEquals

class ConvertTest {
    val convert = Convert()

    @Test fun singleRomanLettersShouldConvertToHinduArabicNumbers() {
        assertEquals(1, convert.convert("I"), "I should convert to 1")
        assertEquals(5, convert.convert("V"), "V should convert to 5")
        assertEquals(10, convert.convert("X"), "X should convert to 10")
        assertEquals(50, convert.convert("L"), "L should convert to 50")
        assertEquals(100, convert.convert("C"), "C should convert to 100")
        assertEquals(500, convert.convert("D"), "D should convert to 500")
        assertEquals(1000, convert.convert("M"), "M should convert to 1000")
    }

    @Test fun ascendingRomanLettersShouldBeAdded() {
        assertEquals(6, convert.convert("VI"), "VI should convert to 6")
        assertEquals(1666, convert.convert("MDCLXVI"), "MDCLXVI should convert to 1666")
        assertEquals(2020, convert.convert("MMXX"), "MMXX should convert to 2020")
    }

    @Test fun shouldIgnoreUnrecognizableTextWithinValidRomanNumerals() {
        assertEquals(6, convert.convert("Very😀Important!بہت اہم"), "Very😀Important!بہت اہم should convert to 6")
    }
}
