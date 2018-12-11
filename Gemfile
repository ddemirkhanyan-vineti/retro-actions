source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

# Standard Rails packaging
gem 'rails', '~> 5.1.3'
gem 'pg'
gem 'active_model_serializers', '~> 0.10.0'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'

# Project-specific gems
gem 'awesome_print'
gem 'devise'
gem 'devise_token_auth'
gem 'omniauth'
gem 'pundit'
gem 'rack-cors', require: 'rack/cors'

gem 'trailblazer-rails', '~> 2.1.0'
gem 'dry-validation', "0.11.1"

group :development do
  gem 'listen'
  gem 'parity'
  gem 'web-console'
end

group :development, :test do
  gem 'byebug', '~> 8.2.2'
  gem 'foreman'
  gem 'pry-byebug'
  gem 'mailcatcher'
  gem 'pry'
  gem 'rails-erd'
  gem 'rails-controller-testing'
  gem 'rspec-rails'
  gem 'rspec_junit_formatter', '~> 0.2.3'
  gem 'spring'
  gem 'faker'
  gem 'factory_bot_rails'
end
group :test do
  gem 'database_cleaner'

  gem 'rspec-html-matchers'
  gem 'shoulda-callback-matchers'
  gem 'shoulda-matchers'
  gem 'simplecov'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
