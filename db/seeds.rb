# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Lesson.destroy_all
Term.destroy_all
User.destroy_all
Language.destroy_all

puts "seeding..."

User.create(
    username: "ericein",
    password: "code1"
)

User.create(
    username: "samiam",
    password: "musicisgr8"
)

Language.create(
    name: "ruby"
)

Language.create(
    name: "javascript"
)

Term.create(
    name: "function",
    language: Language.find_by(name: "javascript"),
    definition: "According to Google, a function is a set of statements that performs a task or calculates a value"
)

Term.create(
    name: "method",
    language: Language.find_by(name: "ruby"),
    definition: "According to Google, a set of expressions that returns a value"
)

Lesson.create(
    id: 1,
    user: User.second,
    language: Language.first,
    description: "Ruby is an object-oriented language. According to the dicionary, this means Ruby uses a methodology which enables a system to be modeled as a set of objects which can be controlled and manipulated in a modular manner",
    level: 1
)

Lesson.create(
    id: 2,
    user: User.first,
    language: Language.second,
    description: "JavaScript is unique because it is dynamic and interactive, allowing one to create useful web applications easily",
    level: 1
)


