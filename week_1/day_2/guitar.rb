
price = 500
condition = "excellent"

if (price <= 500 && condition == "excellent")
  puts "Buy the guitar"
else
  puts "Don't buy the guitar"
end

if (price <= 500 || condition == "excellent")
  puts "buy the guitar"
else
  puts "don't buy the guitar"
end
