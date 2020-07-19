FactoryBot.define do
  factory :message do
    user
    group
    message {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/public/images/test_image.png")}
  end
end