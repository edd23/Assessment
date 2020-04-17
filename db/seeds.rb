# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

20.times do
  Item.create(
    name: Faker::Name.unique.name,
    image: "https://picsum.photos/100",
    description: Faker::Hipster.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 5),
    likes: rand(1...50),
 )
end