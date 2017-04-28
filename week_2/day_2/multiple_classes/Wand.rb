class Wand

 attr_reader :wand_wood 

def initialize(wand_wood, wand_core)
@wand_wood = wand_wood
@wand_core = wand_core
end



def cast(spell)
  if @wand_wood = "Holly" && @wand_core == "Phoenix Feather"
  return spell.upcase
  end
  return spell
end

end
