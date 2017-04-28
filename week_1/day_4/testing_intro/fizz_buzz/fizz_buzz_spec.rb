require ("minitest/autorun")
require("minitest/rg")

# require ("minitest/nyan_cat")

require_relative("./fizz_buzz.rb")

class FizzBuzzTest < MiniTest::Test

  def test_add_one_5_is_6
  expected_value = 6
  output_value = add_one(5)
  assert_equal(expected_value, output_value)
  end

  def test_fizz_buzz_return_number
    expected_value = 1
    output_value = fizz_buzz(1)
    assert_equal(expected_value, output_value)

    #assert_equal(1, fizz_buzz(1)) 
  end

  def  test_fizz_buzz_3_returns_fizz
    assert_equal("fizz", fizz_buzz(3))
  end
  
  def test_fizz_buzz_5_returns_buzz
    assert_equal("buzz", fizz_buzz(5))  
  end    

  def test_fizz_buzz_6_returns_fizz
    assert_equal("fizz", fizz_buzz(6))
  end  

  def test_fizz_buzz_10_returns_buzz
    assert_equal("buzz", fizz_buzz(10))  
  end 

  def test_fizz_buzz_15_returns_fizzbuzz
    assert_equal("fizzbuzz", fizz_buzz(15))  
  end 

end  
