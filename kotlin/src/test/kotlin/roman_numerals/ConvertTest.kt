package roman_numerals

import kotlin.test.Test
import kotlin.test.assertEquals

class ConvertTest {
    @Test fun singleRomanLettersShouldConvertToHinduArabicNumbers() {
        val classUnderTest = Convert()
        assertEquals(1, classUnderTest.convert("I"), "I should convert to 1")
        assertEquals(5, classUnderTest.convert("V"), "V should convert to 5")
        assertEquals(10, classUnderTest.convert("X"), "X should convert to 10")
        assertEquals(50, classUnderTest.convert("L"), "L should convert to 50")
        assertEquals(100, classUnderTest.convert("C"), "C should convert to 100")
        assertEquals(500, classUnderTest.convert("D"), "D should convert to 500")
        assertEquals(1000, classUnderTest.convert("M"), "M should convert to 1000")
    }
}
