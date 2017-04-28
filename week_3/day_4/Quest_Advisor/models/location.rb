require_relative("../db/sql_runner")

class Location 

  attr_reader :id
  attr_accessor :name, :category 

  def initialize( options )
    @id = options['id'].to_i
    @name = options['name']
    @category = options['category']
  end

  def save()
    sql = "INSERT INTO locations (name, category) VALUES ('#{ @name }', '#{ @category }') RETURNING id"
    location = SqlRunner.run( sql ).first
    @id = location['id'].to_i
  end

  def self.all()
    sql = "SELECT * FROM locations"
    locations = Location.get_many(sql)
    return locations
  end

  def self.delete_all() 
    sql = "DELETE FROM locations"
    SqlRunner.run(sql)
  end
   

  def self.get_many(sql)
    locations = SqlRunner.run(sql)
    result = locations.map { |location| Location.new( location ) }
    return result
   end 

  def users
    sql = "SELECT users. * from users INNER JOIN visits on visits.user_id = users.id WHERE location_id = #{@id};"
    return User.get_many(sql)
  end  
end