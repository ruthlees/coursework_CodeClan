
def add_one(number)
  return number + 1
end  

def fizz_buzz(number)

multiple_of_3 = number % 3 == 0
multiple_of_5 = number % 5 == 0

  if (number % 3 == 0 && number % 5 == 0) 
    return "fizzbuzz"
  end
    
  if (number % 3 == 0)
  return "fizz"
elsif(number % 5 == 0)
  return "buzz"
  end  

 return number 
end

  