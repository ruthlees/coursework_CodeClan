require('minitest/autorun')
require('minitest/rg')
require_relative('../Bus')
require_relative('../Person')

class TestBus < MiniTest::Test

def setup
  @bus = Bus.new(22, "St Encho Square")
  @passenger1 = Person.new("Iggy", 101)
  @passenger2 = Person.new("Sarah", 29)
end  

def test_bus_number
  assert_equal(22, @bus.route_number)
end

def test_destination
  assert_equal("St Encho Square", @bus.destination)
end

def test_drive_bus
  assert_equal("Brum Brum", @bus.drive)
end  

def test_bus_passengers
  assert_equal(Array.new, @bus.passengers)
end

def test_initial_passengers
  assert_equal(0, @bus.get_number_of_passengers)
end  

def test_add_passenger_to_bus
  @bus.pick_up(@passenger1)
  assert_equal(1, @bus.get_number_of_passengers())
end

def test_drop_off_passenger
  @bus.pick_up(@passenger2)
  @bus.drop_off(@passenger2) 
  assert_equal(0, @bus.get_number_of_passengers)
end  

def test_empty_bus
  @bus.pick_up(@passenger1)
  @bus.pick_up(@passenger2)
  @bus.get_aff()
  assert_equal(0, @bus.get_number_of_passengers)
end



end  