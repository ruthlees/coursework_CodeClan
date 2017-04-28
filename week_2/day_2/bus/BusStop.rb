class BusStop

  attr_reader :name

  def initialize(name)
    @name = name
    @queue = Array.new()
  end

  # def name
  #  return @name 
  # end  

def number_waiting
  return @queue.count()
end

def join_queue(passenger)
  @queue.push(passenger)
  # @queue << passenger
end  



end    