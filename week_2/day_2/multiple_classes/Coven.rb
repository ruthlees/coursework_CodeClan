class Coven


def initialize(members)
  @members = members
end


def cast_spell(spell)
for wizards in @members
  puts wizards.cast_spell(spell)  
end  
end





end