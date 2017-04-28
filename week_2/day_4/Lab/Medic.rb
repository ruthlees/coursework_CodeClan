require_relative("./Person")

class Medic < Person
  
  def talk
    return "My name is Medic Sanders"
  end  


  def heal()
  return "I can heal you!"
  end

end  