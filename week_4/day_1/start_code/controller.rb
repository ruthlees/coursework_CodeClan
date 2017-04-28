require("sinatra")
require("sinatra/contrib/all")
require("pry-byebug")
require('json')
require_relative('./models/calculator')


get '/' do
  erb(:home)
end  

get '/about_us' do
  erb(:about_us)
end  



get '/add/:num1/:num2' do 
  calculator = Calculator.new(params[:num1].to_i, params[:num2].to_i)
 @calculation = calculator.add()
 erb( :result)
end  

get '/subtract/:num1/:num2' do
 calculator = Calculator.new(params[:num1].to_i, params[:num2].to_i)
 @calculation = calculator.subtract()
 erb(:result)
end

get '/multiply/:num1/:num2' do 
  calculator = Calculator.new(params[:num1].to_i, params[:num2].to_i)
  @calculation = calculator.multiply()
  erb(:result)
end 

get '/divide/:num1/:num2' do
calculator = Calculator.new(params[:num1].to_i, params[:num2].to_f)
 @calculation = calculator.divide()
 erb(:result)
end 

# get '/all/:num1/:num2' do 
#   calculator = Calculator.new( params[:num1].to_i, params[:num2].to_i)
#    results ={
#     add:calculator.add(),
#     subtract: calculator.subtract(),
#     multiply: calculator.multiply(),
#     divide: calculator.divide()
#  }

#  return results.to_json
# end  


# get '/add/:num1/:num2' do

# calculator = Calculator.new( params[:num1].to_i, params[:num2].to_i)

# return "#{calculator.add()}"
# end  

# # get '/subtract/:num1/:num2' do
# # calculator = Calculator.new(params[:num])


# get '/multiply/:num1/:num2' do
#  calculator = Calculator.new(params[:num1].to_i, params[:num2].to_i)
# return "#{calculator.multiply()}"
# end  

# get '/divide/:num1/:num2' do
#   calculator = Calculator.new(params[:num1].to_f, params[:num2].to_i)
#  return "#{calculator.divide()}" 
# end 