class Wizards

attr_reader :name

def initialize(name, wand)

@name = name
@wand = wand

end

# def cast_spell(spell)
#  return spell
# end  


  # if @wand_wood == "yew" && @wand_core == "phoenix feather"
  #   return spell.upcase
  # end
  
  # return spell
def cast_spell(spell)
  @wand.cast(spell)

end


end  