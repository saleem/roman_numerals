package roman_numerals

import kotlin.test.Test
import kotlin.test.assertEquals

class ConvertTest {
    @Test fun testConvert() {
        val classUnderTest = Convert()
        assertEquals(1, classUnderTest.convert("I"), "I should convert to 1")
    }
}
