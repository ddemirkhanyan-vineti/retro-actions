require 'rspec/expectations'

def json_body(response, *nested)
  body = JSON.parse(response.body, symbolize_names: true)
  body = body.dig(*nested) if nested.any?
  body
rescue JSON::ParserError  => e
  puts "JSON response body was: '#{response.body}'"
  raise e
end

RSpec::Matchers.define :have_json_body do |expected|
  match do |actual|
    @actual = json_body(actual, *@nested)
    values_match? expected, @actual
  end

  chain :in do |*nested|
    @nested = nested
  end

  diffable

  failure_message do
    "expected #{@actual} to have JSON body #{expected}"
  end
end
