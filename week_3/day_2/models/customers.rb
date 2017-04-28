require('pg')
require_relative('../db/sql_runner')

class Customer

  attr_reader :id, :name

  def initialize (options)
    @id = options[id].to_i if options['id']
    @name = options['name']

  end

  def save()
   sql = "INSERT INTO customers (name) VALUES ('#{@name}') returning *;"
   result = SqlRunner.run(sql) 
   @id = result.first['id'].to_i
  end 

  def self.all()
    sql = "SELECT * FROM customers;"
    customers = SqlRunner.run(sql)
    return customers.map { |person| Customer.new(person)}
  end

  def pizza_orders()
    sql = "SELECT * FROM pizza_orders WHERE  customer_id  = #{@id}"
    orders = SqlRunner.run(sql)
    result = orders.map { |order| PizzaOrder.new (order)}
    return result
  end

end
