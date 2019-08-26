# Roman to Hindu-Arabic number conversion

Roman numerals are I, V, X, L, C, D, and M. They correspond to the common (Hindu-Arabic) numbers 1, 5, 10, 50, 100, 500, and 1000, respectively.

Roman numbers are written using these numerals; and are additive in all cases *except* when I precedes V, X precedes L or C, and C precedes D or M.

In these cases, the smaller Roman number is *subtracted* from the former, viz:

* IV = 4
* XL = 40
* XC = 90
* CD = 400
* CM = 900

This monorepo contains a few TDD'd samples of Roman to Hindu-Arabic conversions. The purpose is illustrative: how TDD aids in simple design and refactoring.

It's instructive to examine not just the final solution but each individual commit.

# How to run

This is a monorepo. When you clone it, you'll get small codebases in multiple languages.

## Javascript

Make sure you have [node.js installed](https://nodejs.org/en/download/).

Then, in a shell/terminal window, `cd` to the `js` directory and run `yarn install` followed by `yarn run test`.

## Ruby

Make sure you have [Ruby installed](https://www.ruby-lang.org/en/documentation/installation/).

Install the `bundler` gem by running `gem install bundler` in a shell/terminal window.

Then, in a shell/terminal window, `cd` to the `ruby` directory and run `ruby test_roman.rb`.

# References

https://en.wikipedia.org/wiki/Roman_numerals

https://en.wikipedia.org/wiki/Hindu%E2%80%93Arabic_numeral_system
  
