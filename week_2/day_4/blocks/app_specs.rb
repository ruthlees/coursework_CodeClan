require("minitest/autorun")
require("minitest/rg")
require_relative("app")

class TestApp < MiniTest::Test

def test_array_map_add_one
  array = [1, 2, 3]
  result = array.map {|item| item + 1}
  assert_equal([2, 3, 4], result)
end  


def test_adds_one_to_each_item
  assert_equal([2, 3, 4], map([1, 2, 3]) { |item| item + 1 })
end

def test_multiple_by_two
  assert_equal([2, 4, 6], map([1, 2, 3]) { |item| item * 2})
end  

def test_add_up_to_you
  assert_equal(3, up_to_you {1 + 2})

end  

def test_up_to_you_hello
  assert_equal( "hello Ruth", up_to_you_hello { |name| "hello " + name })
end


end  