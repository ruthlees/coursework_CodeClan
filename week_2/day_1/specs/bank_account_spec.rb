require('minitest/autorun')
require('minitest/rg')
require_relative('../BankAccount.rb')

class TestBankAccount <MiniTest::Test

  def test_account_name


  account = BankAccount.new("Ally", 500, "business")
  account_two = BankAccount.new("Ruth", 1000, "personal")

  account.account_name = ("Alastiar")
  assert_equal("Alastiar", account.account_name)
  assert_equal("Ruth", account_two.account_name)
  
  end 

  def test_pay_into_account
    account = BankAccount.new("Ally", 500, "business")
    account.pay_in(1000)
    assert_equal(1500, account.balance)
  end  

  def test_monthly_fee_business
    account = BankAccount.new("Ally", 500, "business")
    account.pay_monthly_fee() 
    assert_equal(450, account.balance)
  end  

end  