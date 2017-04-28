def fib(n)
   return 1 if n < 3
   return fib(n - 1) + fib(n - 2)
end

def calculate(num_to_calc, question)
  Thread.new do
   result = fib(num_to_calc)
   puts result
   puts question
  end 
end
   
question = 'Which Fibonacci number would you like to know?'
puts question
input = gets.chomp

while (input != 'quit')
 puts 'Thinking...'
 num_to_calc = input.to_i
 calculate(num_to_calc, question)
 input = gets.chomp
end

