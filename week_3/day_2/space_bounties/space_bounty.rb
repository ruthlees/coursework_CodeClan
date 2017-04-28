require('pg')

class SpaceBounty

attr_accessor :name, :species, :last_known_location, :bounty_value, :id


 def initialize (options)
  @id = options['id'] if options['id'] !=nil
  @name = options['name']
  @species = options['species']
  @last_known_location = options['last_known_location']
  @bounty_value = options['bounty_value'].to_i 
 end  

 def save()
  db = PG.connect({dbname: 'space_bounties', host: 'localhost'})
  sql = "INSERT INTO bounties (name, species, last_known_location, bounty_value) VALUES ('#{@name}', '#{@species}', '#{@last_known_location}', #{@bounty_value}) returning * ;"
  @id = db.exec(sql).first["id"].to_i 
   db.close
 end 

 def update()
  db = PG.connect({dbname: 'space_bounties', host: 'localhost'})
  sql = "UPDATE bounties SET (name, species, last_known_location, bounty_value) = ('#{@name}', '#{@species}', '#{@last_known_location}', #{@bounty_value}) WHERE id = #{@id};"
  db.exec(sql)
  db.close
 end
 
 def delete()
  db = PG.connect({dbname: 'space_bounties', host: 'localhost'})
  sql = "DELETE FROM bounties WHERE id = #{@id};"
  db.exec(sql)
  db.close
 end

  #class methods
  def self.all()
    db = PG.connect({dbname: 'space_bounties', host: 'localhost'})
    sql = "SELECT * FROM bounties;"
    bounty_number = db.exec(sql)
    db.close
    return bounty_number.map {|bounty| SpaceBounty.new(bounty)}
  end

  def self.delete_all()
    db = PG.connect ({dbname: 'space_bounties', host: 'localhost'})
    sql = "DELETE FROM bounties;"
    db.exec(sql)
    db.close
  end

end