require_relative("./space_bounty")
require ("pry-byebug")


space_bounty1 = SpaceBounty.new({'name' => 'Ruby', 'species' => 'human', 'last_known_location' => 'Mars', 'bounty_value' => 1000})
space_bounty2 = SpaceBounty.new({'name' => 'Big D', 'species' => 'cat', 'last_known_location' => 'Jupiter', 'bounty_value' => 800})

binding.pry

nil