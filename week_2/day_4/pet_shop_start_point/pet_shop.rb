require_relative('pet')

class PetShop

  def initialize (input_pets)
    @pets = input_pets
  end



def pet_type(pet_name)
  found_pet = @pets.find() { |pet| pet.name == pet_name}
  return found_pet.type
end

def get_names_of_all_pets_of_type(type_search)
  all_dogs = @pets.select() { |pet| pet.type == type_search}
  return all_dogs.collect() { |dog| dog.name}

end

def get_number_of_pets_costing_at_least(pet_price)
  expensive_pet = @pets.select() { |pet| pet.price >= 1000 }
  return expensive_pet.count()

end  

# def get_number_of_pets_costing_at_least(cost)
#   return @pets.count() { |pet| pet.price >= cost}
# end  


end