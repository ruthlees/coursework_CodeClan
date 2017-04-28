require_relative("./functions.rb")

puts "Enter your pin"
pin_code = gets.chomp.to_i()

puts "Your balance is:"
puts show_balance(pin_code)
