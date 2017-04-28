require("minitest/autorun")
require("minitest/rg")

require_relative ("../motorbike")

class TestMotorbike < MiniTest::Test

  def setup

   @motorbike = Motorbike.new
  end  


def test_drive
  assert_equal("Brrrm!", @motorbike.drive())
end



end 