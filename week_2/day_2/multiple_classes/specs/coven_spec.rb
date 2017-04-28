require_relative('../Wand')
require_relative('../Wizards')
require_relative('../Coven')


@elder_wand = Wand.new("Holly", "Phoenix Feather")
@broken_wand = Wand.new("Oak", "Unicorn Hair
  ")
@elm_wand = Wand.new("Elm", "Dragon HeartString")

@Ron = Wizards.new("Ron", @broken_wand)
@Harry = Wizards.new("Harry", @elder_wand)
@Hermione =  Wizards.new("Hermione", @elm_wand
  )


coven_1 = Coven.new([@Ron, @Harry, @Hermione])
coven_1.cast_spell("Leviosa")
