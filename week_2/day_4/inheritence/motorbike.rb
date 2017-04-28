require_relative('./vehicle')




class Motorbike < Vehicle

  def initialize
    super(2)
  end

  def drive()
  return super() + " I am a motorbike."
  end

end