# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.destroy_all

bench1 = Bench.create(description:"nice bench", lat:"37.795608", lng:"-122.413576")
bench2 = Bench.create(description:"good bench", lat:"37.787672", lng:"-122.426966")
bench3 = Bench.create(description:"cool bench", lat:"37.791369", lng:"-122.408812")
bench4 = Bench.create(description:"unique bench", lat:"37.799508", lng:"-122.404650")
bench5 = Bench.create(description:"aA bench", lat:"37.798660", lng:"-122.401088")
